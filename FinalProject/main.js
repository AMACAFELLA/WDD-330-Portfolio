const API_KEY = 'api_key=a4d59c5b4b176d686c3d6253d002d7f3';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=vote_average=1&vote_average=5&&'+ API_KEY;
//api sort_by= vote_average bewteen 1 and 5
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.querySelector('main');
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `<img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
        <h3>overview</h3>
        ${overview}
    </div>`

    main.appendChild(movieE1);

    })
}

function getColor(vote){
    if(vote >= 4){
        return 'green';
    }else if(vote >= 2 && vote < 4){
        return 'yellow';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    getMovies(searchURL + '&query=' + searchTerm);

})

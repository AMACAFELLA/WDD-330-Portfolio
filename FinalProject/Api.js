import { storeMovie, watchLaterPage } from "./ls.js";

const main = document.querySelector('main');


//create a default class for the api
export default class Api{
    constructor(id){
        this.element = document.getElementById(id);
        this.key = id;                                     
        this.error = document.getElementById("error");     
    }
}
 export function API(){
    fetch("https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2022&min_imdb=1&max_imdb=5&genre=family&language=english&type=movie&sort=latest", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ott-details.p.rapidapi.com",
		"x-rapidapi-key": "3490023ad4msh039bc81fee97be6p183262jsncf2583184225"
	}
})
.then(response => response.json())
.then( data => {
    const list = data.results;
    
    
    //function show one movie at a time
    function showMovie(movie){
        main.innerHTML = '';

        const {title, imageurl, imdbrating, synopsis} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `<button class="watchlaterBtn"><i class="fa fa-heart"></i></button>
        <img src="${imageurl? imageurl:"noImage.png"  }" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(imdbrating)}">${imdbrating}</span>
    </div>

    <div class="overview">
        <h3>synopsis</h3>
        ${synopsis}
    </div>`

    main.appendChild(movieE1);
    }
    showMovie(list[0]);
    function showNextMovie(movie){
        document.querySelector('.recommendation').addEventListener('click', () => {
            //Every time the recommendation button is clicked go to the next page of the API
            const random = Math.floor(Math.random() * movie.length);
            showMovie(movie[random]);
            storeMovie(movie[random]);
        })
    }
    //Calling all the functions
    showNextMovie(list);
    storeMovie(list[0]);
    watchLaterPage();
    
})
.catch(err => {
	console.error(err);
});
}

//const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const form = document.getElementById('form');
const search = document.getElementById('search');

function getColor(vote){
    if(vote >= 4){
        return 'green';
    }else if(vote >= 2 && vote < 4){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    getMovies(searchURL + '&query=' + searchTerm);

})






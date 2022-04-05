import { storeMovie, watchLaterPage } from "./ls.js";

const main = document.querySelector('main');

 export function API(){
    fetch("https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2022&min_imdb=1&max_imdb=5&genre=family&language=english&type=movie&sort=latest", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ott-details.p.rapidapi.com",
		"x-rapidapi-key": "105637c7f6msh61a872334cf7e8ep115dbejsne2c63dbdd245"
	}
})
.then(response => response.json())
.then( data => {
    const list = data.results;
    
    //function to show one movie at a time
    function showMovie(movie){
        main.innerHTML = '';
        const {title, imageurl, imdbrating, synopsis} = movie;
        const movieOne = document.createElement('div');
        movieOne.classList.add('movie');
        movieOne.innerHTML = `<button class="watchlaterBtn"><i class="fa fa-heart fa-lg"></i></button>
        <img src="${imageurl? imageurl:"noImage.png"  }" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(imdbrating)}">${imdbrating}</span>
    </div>

    <div class="overview">
        <h3>synopsis</h3>
        ${synopsis}
    </div>`

    main.appendChild(movieOne);
    }
    //function to display the movies in the main page
    showMovie(list[0]);
    function showNextMovie(movie){
        document.querySelector('.recommendation').addEventListener('click', () => {
            //randomly select a movie from the list
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

//Function to get the color based on the rating of the movie
export function getColor(vote){
    if(vote >= 4){
        return 'green';
    }else if(vote >= 2 && vote < 4){
        return 'orange';
    }else{
        return 'red';
    }
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
		'X-RapidAPI-Key': '105637c7f6msh61a872334cf7e8ep115dbejsne2c63dbdd245'
	}
};

//function to search for the movie when the search button is clicked.
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.getElementById('search');
    const searchTerm = search.value;
    getMovies(searchTerm);
})

//function to search for the movie
function getMovies(searchTerm){
    main.innerHTML = '';
    const searchURL = `https://ott-details.p.rapidapi.com/search?title=${searchTerm}`;
    fetch(searchURL, options)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(movie => {
            const {title, imageurl, synopsis} = movie;
            const movieOne = document.createElement('div');
            movieOne.classList.add('movie');
            movieOne.innerHTML = `<button class="watchlaterBtn"><i class="fa fa-heart fa-lg"></i></button>
            <img src="${imageurl? imageurl:"noImage.png"  }" alt="${title}">
            <div class="movie-info">
            <h3>${title}</h3>
        </div>

        <div class="overview">
            <h3>synopsis</h3>
            ${synopsis}
        </div>`

        main.appendChild(movieOne);
        }
        )
    })
    .catch(err => {
        console.error(err);
    });
}





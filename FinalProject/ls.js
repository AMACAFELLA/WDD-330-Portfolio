
//created a local storage function that will store the movies in the local storage when the user clicks the watch later button for each movie
export function storeMovie(movie){
    let movies;
    document.querySelector('.watchlaterBtn').addEventListener('click', () => {
        //Logic to add one movie at a time to the local storage when the watch later button is clicked
        if(localStorage.getItem('movies') === null){
            movies = [];
        }
        else{
            movies = JSON.parse(localStorage.getItem('movies'));
        }
        movies.push(movie);
        //Logic to set the local storage to the movies array for each movie
        localStorage.setItem('movies', JSON.stringify(movies));
        console.log(movies);
        alert('movie added to watch later');

    }
    )
}


//created a function when the user clicks on the watchlater they will be redirected to the watch later page
export function watchLaterPage(){
    document.querySelector('.watchlater').addEventListener('click', () => {
        window.location.href = 'watchLater.html';
        //display the movies from the local storage
        displayWatchLater();
        
    })
}

//Created a function to display the watch later movies
function displayWatchLater(){
    let watchLater;
    if(localStorage.getItem('movies') === null){
        watchLater = [];
    }
    else{
        watchLater = JSON.parse(localStorage.getItem('movies'));
    }
    const watchLaterDisplay = document.getElementsByClassName('movie');
    watchLaterDisplay.innerHTML = '';
    watchLater.forEach(movie => {
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

    watchLaterDisplay.appendChild(movieE1);
    })
}
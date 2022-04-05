//created a local storage function that will store the movies in the local storage when the user clicks the watch later button for each movie
export function storeMovie(movie){
    let movies;
    document.querySelector('.watchlaterBtn').addEventListener('click', () => {
        //if there is no movies in the local storage, create a new array to store the movies
        if(localStorage.getItem('movieList') === null){
            movies = [];
        }
        //if there are movies in the local storage, get the movies from the local storage
        else{
            movies = JSON.parse(localStorage.getItem('movieList'));
        }
        //push the movie to the movies array
        movies.push(movie);
        //store the movies in the local storage
        localStorage.setItem('movieList', JSON.stringify(movies));
        //alert the user that the movie has been added to the watch later list
        alert('Movie added to watch later list');

    }
    )
}

//created a function when the user clicks on the watchlater they will be redirected to the watch later page
export function watchLaterPage(){
    document.querySelector('.watchlater').addEventListener('click', () => {
        console.log(localStorage.getItem('movieList'));
        displayWatchLater();
        deleteMovie();
    })
}

//function when page loads to display the movies from the local storage
function displayWatchLater(){
   //display the movies in the storeMovie function
   main.innerHTML = '';
   const watchLater = JSON.parse(localStorage.getItem('movieList'));
   watchLater.forEach(movie => {
         main.innerHTML += `
         <div class="movie">
            <button class="DeleteMovie"><i class="fa fa-trash fa-lg"></i></button>
            <img src="${movie.imageurl? movie.imageurl:"noImage.png"}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getColor(movie.imdbrating)}">${movie.imdbrating}</span>
            </div>

            <div class="overview">
                <h3>synopsis</h3>
                ${movie.synopsis}
            </div>
        </div>`
    })
}

//created a function to delete the movie from the local storage
function deleteMovie(){
    const deleteMovie = document.querySelectorAll('.DeleteMovie');
    deleteMovie.forEach(button => {
        button.addEventListener('click', () => {
            const movie = button.parentElement;
            const title = movie.querySelector('h3').textContent;
            const movies = JSON.parse(localStorage.getItem('movieList'));
            movies.forEach((movie, index) => {
                if(movie.title === title){
                    movies.splice(index, 1);
                }
            })
            localStorage.setItem('movieList', JSON.stringify(movies));
            movie.remove();
        })
    })
}

function getColor(vote){
    if(vote >= 4){
        return 'green';
    }else if(vote >= 2 && vote < 4){
        return 'orange';
    }else{
        return 'red';
    }
}
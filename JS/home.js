
var API_KEY = "ea0fd1ba91f7be5d2fe30f12119e6340";
var MOVIE_DB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie?"
var POSTER_PATH = "https://image.tmdb.org/t/p/w500"

var movie1 = {
    "id": 1,
    "original_title": "Braveheart (1995)",
    "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or1gBugydmjToAEq7OZY0owwFk.jpg"
}
var movie2 = {
    "id": 2,
    "original_title": "Moana (2016)",
    "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gnD11rlyXFaqG3qDbNaL8FvZa5t.jpg"
}
var movie3 = {
    "id": 3,
    "original_title": "Interstellar (2014)",
    "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
}
var movie4 = {
    "id": 4,
    "original_title": "Forrest Gump (1994)",
    "poster_path": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg"
}

//var movieList = [movie1, movie2, movie3, movie4, "empty"];
var movieList = [];
var favoriteMovieList = [];

// Header fade in.
$(document).ready(function () {
    $("#main-header").fadeOut(0);
    $("#main-header").fadeIn(2000);
})

function handleJson(jsonData) {
    //console.log(movieList);
    movieList = jsonData.results;
    //console.log(movieList);

    // Empty results first.
    $(".movie-list").empty();

    // Add result header.
    //$(".result-header").remove();
    if (movieList.length > 0) {
        var resultHeader = document.createElement('h2');
        resultHeader.innerHTML = "Search result:";
        resultHeader.className = "result-header";
        document.querySelector(".search-result").insertBefore(resultHeader, document.querySelector(".search-result").firstChild);
    }

    if (movieList.length != 0) {

        var stop = movieList.length;

        // for (i = 0; i <= stop; i++) {
        //     var card = createCard(movieList[i]);
        //     document.querySelector(".movie-list").appendChild(card);
        // }

        for (i = 0; i <= stop; i++) {
            var card = document.createElement('div');
            card.className = "movie-card";
            // Movie title.
            var title = document.createElement('p');
            title.className = "card-title";
            if (movieList[i].original_title != null) {
                title.innerHTML = movieList[i].original_title + " (" + movieList[i].release_date.slice(0, 4) + ")";
            }
            // Movie poster.
            var img = document.createElement("img");
            img.className = "card-img";
            img.src = POSTER_PATH + movieList[i].poster_path;
            img.alt = "movie poster";
            // Assembling movie-card.
            card.id = movieList[i].id;
            card.appendChild(title);
            card.appendChild(img);
            card.onclick = pickMovie();
            //console.log(card.id);
            // if (i == stop - 1) {
            //     card.style.visibility = "hidden";
            // }
            // Adding movie-card to grid.
            document.querySelector(".movie-list").appendChild(card);
        }
    }
}

function createCard(movie) {
    var card = document.createElement('div');
    card.className = "movie-card";
    // Movie title.
    var title = document.createElement('p');
    title.className = "card-title";
    if (movie.original_title != null) {
        title.innerHTML = movie.original_title + " (" + movie.release_date.slice(0, 4) + ")";
    }
    // Movie poster.
    var img = document.createElement("img");
    img.className = "card-img";
    img.src = POSTER_PATH + movie.poster_path;
    img.alt = "movie poster";
    // Assembling movie-card.
    card.id = movie.id;
    card.appendChild(title);
    card.appendChild(img);
    card.onclick = pickMovie();
    //console.log(card.id);
    // if (i == stop - 1) {
    //     card.style.visibility = "hidden";
    // }
    // Adding movie-card to grid.
    return card;

}


$(document).ready(function () {
    $("#search-button").click(function () {

        var searchInput = document.getElementById('search-input').value;
        //console.log(searchInput);
        var url = MOVIE_DB_SEARCH_URL + 'api_key=' + API_KEY + '&language=en-US&query=' + searchInput + '&page=1&include_adult=false';
        //console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(json => handleJson(json));
    })
})


function CreateCard(movie) {
    var card = document.createElement('div');
    card.className = "movie-card";
    // Movie title.
    var title = document.createElement('p');
    title.className = "card-title";
    title.innerHTML = movie.title;
    // Movie poster.
    var img = document.createElement("img");
    img.className = "card-img";
    img.src = movie.img;
    img.alt = "movie poster";
    // Assembling movie-card.
    card.dataset.id = movie.id;
    card.appendChild(title);
    card.appendChild(img);
    card.onclick = PickMovie();
    //alert(card.getAttribute("data-id"));
    return card;
}


function pickMovie() {
    $(".movie-card").off().click(function () {
        var id = parseInt($(this).attr('id'));
        //console.log(id);
        //console.log(favoriteMovieList);

        // Remember to make sure that the types are the same when using ===.
        var movie = movieList.find(x => x.id === id);
        //console.log(movie);
        favoriteMovieList.push(movie);
        console.log(favoriteMovieList);

        $(".movie-list").empty();
        $(".favorites-list").empty();
        $(".result-header").remove();

        // Empty results first.

        // Add result header.
        //$(".favorites-header").remove();
        if (favoriteMovieList.length == 1) {
            var favoritesHeader = document.createElement('h2');
            favoritesHeader.innerHTML = "Favorite Movies:";
            favoritesHeader.className = "favorites-header";
            document.querySelector(".favorites-result").insertBefore(favoritesHeader, document.querySelector(".favorites-result").firstChild);
        }

        if (favoriteMovieList.length != 0) {
            var stop = favoriteMovieList.length;

            for (i = 0; i <= stop; i++) {
                var card = document.createElement('a');
                card.className = "movie-card";
                // Movie title.
                var title = document.createElement('p');
                title.className = "card-title";
                if (favoriteMovieList[i].original_title != null) {
                    title.innerHTML = favoriteMovieList[i].original_title + " (" + favoriteMovieList[i].release_date.slice(0, 4) + ")";
                    console.log(title.innerHTML);
                }
                // Movie poster.
                var img = document.createElement("img");
                img.className = "card-img";
                img.src = POSTER_PATH + favoriteMovieList[i].poster_path;
                console.log(img.src);
                img.alt = "movie poster";
                // Assembling movie-card.
                card.id = favoriteMovieList[i].id;
                console.log(card.id);
                card.appendChild(title);
                card.appendChild(img);
                card.href = "/info.html?id=" + favoriteMovieList[i].id;
                card.onclick = pickFavoriteMovie();
                //console.log(card.id);
                // if (i == stop - 1) {
                //     card.style.visibility = "hidden";
                // }
                // Adding movie-card to grid.
                document.querySelector(".favorites-list").appendChild(card);
            }
        }
    })
}

function pickFavoriteMovie() {
    // Replaced by anchor tag!
    console.log("Not implemented yet!");
}



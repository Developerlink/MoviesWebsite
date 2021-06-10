var API_KEY = "ea0fd1ba91f7be5d2fe30f12119e6340";
var MOVIE_DB_SEARCH_URL = "https://api.themoviedb.org/3/movie/";
var POSTER_PATH = "https://image.tmdb.org/t/p/w500";

$(document).ready(function () {
    var queryDict = {}
    location.search.substr(1).split("&").forEach(function (item) { queryDict[item.split("=")[0]] = item.split("=")[1] })
    //console.log(queryDict.id);

    // Alternative method.
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);

    // Multi-line solution saved for future uses.
    /*
    var qd = {};
    if (location.search) location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]); //  null-coalescing / short-circuit
    //(k in qd) ? qd[k].push(v) : qd[k] = [v]
    (qd[k] = qd[k] || []).push(v) // null-coalescing / short-circuit
    })
    */

    var api_url = MOVIE_DB_SEARCH_URL + id + "?api_key=" + API_KEY + "&language=en-US";

    fetch(api_url)
        .then(response => response.json())
        .then(json => handleJson(json));
})

function handleJson(jsonData) {
    //console.log(JSON.stringify(jsonData));
    var movie = jsonData;
    //console.log(movie);    

    var infoTable = document.querySelector(".info-table");

    var row1 = document.createElement("tr");
    infoTable.appendChild(row1);
    var titleLabel = document.createElement("td");
    titleLabel.innerHTML = "Title";
    var title = document.createElement("td");
    title.innerHTML = movie.original_title;
    row1.appendChild(titleLabel);
    row1.appendChild(title);

    var row2 = document.createElement("tr");
    infoTable.appendChild(row2);
    var yearLabel = document.createElement("td");
    yearLabel.innerHTML = "Release Date";
    var year = document.createElement("td");
    year.innerHTML = movie.release_date;
    row2.appendChild(yearLabel);
    row2.appendChild(year);

    var row3 = document.createElement("tr");
    infoTable.appendChild(row3);
    var ratingLabel = document.createElement("td");
    ratingLabel.innerHTML = "Rating";
    var rating = document.createElement("td");
    rating.innerHTML = movie.vote_average;
    row3.appendChild(ratingLabel);
    row3.appendChild(rating);

    var row4 = document.createElement("tr");
    infoTable.appendChild(row4);
    var overviewLabel = document.createElement("td");
    overviewLabel.innerHTML = "Overview";
    var overview = document.createElement("td");
    overview.innerHTML = movie.overview;
    row4.appendChild(overviewLabel);
    row4.appendChild(overview);

    var row5 = document.createElement("tr");
    infoTable.appendChild(row5);
    var genreLabel = document.createElement("td");
    genreLabel.innerHTML = "Genres";
    var genre = document.createElement("td");
    var limit = movie.genres.length;
    console.log(limit);
    for (i = 0; i < limit; i++){
        console.log(movie.genres[i].name);
        genre.innerHTML += movie.genres[i].name;
        if (i != limit - 1){
            genre.innerHTML += ", ";
        }
    }
    console.log(genre.innerHTML);
    row5.appendChild(genreLabel);
    row5.appendChild(genre);


    var poster = document.createElement("img");
    poster.src = POSTER_PATH + movie.poster_path;
    poster.className = "poster";
    document.querySelector(".movie-poster").appendChild(poster);

}


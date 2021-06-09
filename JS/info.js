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

function handleJson(jsonData){
    //console.log(JSON.stringify(jsonData));
    var movie = JSON.parse(JSON.stringify(jsonData));
    //console.log(movie);

    var title = document.createElement("h1");
    title.innerHTML = "Title: " + movie.original_title;
    document.querySelector(".info-panel").appendChild(title);

    var year = document.createElement("h5");
    year.innerHTML = "Release date: " + movie.release_date;
    document.querySelector(".info-panel").appendChild(year);

    var poster = document.createElement("img");
    poster.src = POSTER_PATH + movie.poster_path;
    document.querySelector(".movie-poster").appendChild(poster);

}


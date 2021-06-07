
var movie1 = {
    "title": "Braveheart (1995)",
    "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or1gBugydmjToAEq7OZY0owwFk.jpg"
}
var movie2 = {
    "title": "Moana (2016)",
    "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gnD11rlyXFaqG3qDbNaL8FvZa5t.jpg"
}
var movie3 = {
    "title": "Interstellar (2014)",
    "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
}
var movie4 = {
    "title": "Forrest Gump (1994)",
    "img": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg"
}

var movieList = [movie1, movie2, movie3, movie4];

$(document).ready(function () {
    $("#main-header").fadeOut(0);
    $("#main-header").fadeIn(2000);
})

function SearchAndDisplay() {
    movieList.forEach(function () {
        alert(movie["title"]);
    })
}

$(document).ready(function () {
    $("#search-button").click(function () {
        var resultHeader = document.createElement('h2');
        resultHeader.innerHTML = "Search result:";
        document.querySelector(".movie-list").appendChild(resultHeader);

        for (var m in movieList) {
            var card = document.createElement('div');
            card.innerHTML = movieList[m].title;
            document.querySelector(".movie-list").appendChild(card);
        }
    })
})

$(document).ready(function () {
    $(".movie-card").click(function () {
        document.querySelector(".movie-list").empty();
    })
})


function SayHello() {
    // var node = document.createTextNode("Test");
    // var para = document.createElement("p");
    // var image = document.createElement("img");
    // var element = document.querySelector(".movie-list");

    // movieList.forEach(function(movie){
    //     var div = document.createElement("div");
    //     div.appendChild(para)
    // })

    // len = movieList.length;
    // var resultHeader = $("<h2></h2>");
    // document.querySelector(".movie-list").appendChild(resultHeader);





    // for (i = 0; i < flen; i++)
    // {

    //     node.nodeValue = movieList[i].title;
    //     para.appendChild(node);
    //     element.appendChild(para);
    // }

    // for (var movie of movieList)
    // {
    //     node.nodeValue = movie["title"];
    //     para.appendChild(node);
    //     element.appendChild(para);
    // }


}

function AddMovie() {
    movieList[movieList.length] = "Back to the future";
}

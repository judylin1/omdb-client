var xhr = new XMLHttpRequest();
var x = 'http://www.omdbapi.com/' + document.location.search + "&plot=short&r=json";
  xhr.open('get', x, true);
  xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responseData = JSON.parse(response);

    var title = document.getElementById('title');
    title.innerHTML = responseData.Title;

    var year = document.getElementById('year');
    year.innerHTML = responseData.Year;

    var rating = document.getElementById('rating');
    rating.innerHTML = responseData.Rated;

    var release = document.getElementById('release');
    release.innerHTML = responseData.Released;

    var genre = document.getElementById('genre');
    genre.innerHTML = responseData.Genre;

    var director = document.getElementById('director');
    director.innerHTML = responseData.Director;

    var imdbrating = document.getElementById('imdbrating');
    imdbrating.innerHTML = responseData.imdbRating;s

  });
xhr.send();

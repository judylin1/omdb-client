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

  });
xhr.send();

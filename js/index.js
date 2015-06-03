var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies About Pizza";
document.body.appendChild(h1);

//new XHR
//XHR opens 'get', url??
//xhr. when you load...(addeventlistener)
//xhr.send

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://omdbapi.com/?s=pizza', true);
xhr.addEventListener('load', function () {
//.response is a string. want objects out of it by parsing
var response = xhr.response;
var responseData = JSON.parse(response);

for (var i = 0; i < responseData.Search.length; i++) {

  var a = document.createElement('a');
  a.innerHTML = responseData.Search[i].Title;
  var imdbid = responseData.Search[i].imdbID;
  a.href = 'show.html/?i=' + imdbid + "&plot=short&r=json";

  // <p><a href="/show.html?">Mystic Pizza</a></p>

  var p = document.createElement('p');
  p.appendChild(a);
  document.body.appendChild(p);
  }

});
xhr.send(null);

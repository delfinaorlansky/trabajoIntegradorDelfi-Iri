window.addEventListener('load',function(){
  //
var api_key = "60be6317b0012697cb25d6ce427de920"
// FECTH pedido asincronico a una URL.
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=en-US&page=1")
.then(function(response) {
 return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
})
.then(function(information) {
  console.log(information);
  var url = "https://image.tmdb.org/t/p/original"
  var titulo = ""
  var poster = ""
  var serie = ""
  var ul = document.querySelector('ul#mayorPuntaje')
  for (var i = 0; i < information.results.length; i++) {
    titulo = information.results[i].name
    console.log(information.results[i].poster_path);
    poster = url + information.results[i].poster_path

    serie = '<li>'
    serie +=   '<img src="'+poster+'" alt="">'
    serie +=   '<div class="uk-position-center uk-panel"><h2 class="">'+titulo+'</h2></div>'
    serie += '</li>'

    console.log(serie);
    ul.innerHTML += serie
  }
})
.catch(function(error) {
 console.log("Error: " + error);
})

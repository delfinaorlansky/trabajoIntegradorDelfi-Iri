window.addEventListener ('load', function() {
  var listadoURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=60be6317b0012697cb25d6ce427de920&language=es-AR'
  var list = document.querySelector('.listado')
  fetch(listadoURL)
	.then(function (respuesta){
		return respuesta.json();
	})
	.then(function (informacion){
    console.log(informacion)
    var id = informacion.id
  	for (var genero of informacion.genres) {
			list.innerHTML += `<div class="contenedor"><li><a href="pagina3.html?idDeGenero=${genero.id}&nombreDeGenero=${genero.name}">` + genero.name + `</a></li></div>`;
		}
	})
	.catch(function (error) {
		console.log("Error: " + error);
	})
})

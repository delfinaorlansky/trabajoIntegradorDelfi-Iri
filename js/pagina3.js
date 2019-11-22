window.addEventListener ('load', function () {
  var queryStringObject = new URLSearchParams(window.location.search)
  var idDeGenero = queryStringObject.get("idDeGenero")
console.log(idDeGenero);
  var nombreDeGenero = queryStringObject.get("nombreDeGenero")
console.log(nombreDeGenero);
 var tit = document.querySelector('.tituloGeneros')
 tit.innerHTML = `${nombreDeGenero}`
  var url_seriesPorGenero = "https://api.themoviedb.org/3/discover/tv?api_key=60be6317b0012697cb25d6ce427de920&sort_by=popularity.desc&page=1&with_genres="+idDeGenero
  fetch(url_seriesPorGenero)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (informacion) {
    console.log(informacion)
      var arrayDeSeriesPorGenero = informacion.results
      var titulo = ""
      var url_imge = ""
      var serie  =  ""
      var listaResultados = document.querySelector('.seriesPorGenero')
      for (var i = 0; i < arrayDeSeriesPorGenero.length; i++) {
        titulo = arrayDeSeriesPorGenero[i].name
        url_imge = "https://image.tmdb.org/t/p/original/" + arrayDeSeriesPorGenero[i].poster_path
        seriesxgenero = `<li><a href="detalle.html?idDeSerie=${arrayDeSeriesPorGenero[i].id}">`
        seriesxgenero +=      `<img class="poster" src='${url_imge}' alt="">`
        seriesxgenero +=      `<div class="uk-position-center uk-panel titulo"><h2>${titulo}</h2></div>`
        seriesxgenero +=   `</li></a>`
        listaResultados.innerHTML = contenidoFinal;
      }
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  })

})

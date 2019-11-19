window.addEventListener('load',function(){
  //
  var api_key = "60be6317b0012697cb25d6ce427de920"
  // FECTH pedido asincronico a una URL.
  var urlMasPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1"
  var urlMayorPuntaje = "https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=en-US&page=1"
  var urAlAire = "https://api.themoviedb.org/3/tv/airing_today?api_key="+api_key+"&language=en-US&page=1"

  fetch(urlMayorPuntaje)
    .then(function(response) {
      return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
    })
    .then(function(datos) {
      var contenedorSeriesMasPopulares = document.querySelector('#mayorPuntaje ul')
      var contenidoSlider = '';
      var arraySeriesPopulares = datos.results
      var url_image = ""
      for (var i = 0; i < arraySeriesPopulares.length; i++) {
        titulo = arraySeriesPopulares[i].name
        url_image = "https://image.tmdb.org/t/p/original/" + arraySeriesPopulares[i].poster_path
        serie = `<li><a href="detalle.html?idDeSerie=${arraySeriesPopulares[i].id}">`
        serie += `<img src='${url_image}' alt= " ">`
        //serie += `<div class="uk-position-center uk-panel"><h2>${titulo}</h2></div>` TITULO ARRIBA DEL POSTER
        serie += `</li></a>`
        console.log(serie);
        contenedorSeriesMasPopulares.innerHTML += serie
      }
    //  contenedorSeriesMasPopulares.innerHTML = contenidoSlider
    })


    .catch(function(errores) {
        console.log("Error: " + errores);
    });

    fetch(urlMasPopulares)
      .then(function(response) {
        return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
      })
      .then(function(datos) {
        console.log(datos);
        var url = "https://image.tmdb.org/t/p/original/"
        var titulo = ""
        var poster = ""
        var serie = ""
        var contenedorSeriesMayorPuntaje = document.querySelector('#masPopulares')

        for (var i = 0; i < 10; i++) {
          titulo = datos.results[i].name
          console.log(datos.results[i].poster_path);
          poster = url + datos.results[i].poster_path

          serie = '<article class="article-series">'
          serie +=   '<img src="'+poster+'" width="100px">'
          serie +=   '<h2 class="titulo-series">'+titulo+'</h2>'
          serie += '</article>'

          console.log(serie);
          contenedorSeriesMasPopulares.innerHTML += serie
        }
      //  contenedorSeriesMasPopulares.innerHTML = contenidoSlider
      })
       .catch(function(errores) {
          console.log("Error: " + errores);
       });

    fetch(urAlAire)
    .then(function(response){
      return response.json()
        })
      .then(function(datos) {

          for (var i = 0; i < 10; i++) {
            titulo = datos.results[i].name
            console.log(datos.results[i].poster_path);
            poster = url + datos.results[i].poster_path

            serie = '<article class="article-series">'
            serie +=   '<img src="'+poster+'" width="100px">'
            serie +=   '<h2 class="titulo-series">'+titulo+'</h2>'
            serie += '</article>'

            console.log(serie);
            contenedorSeriesAlAire.innerHTML += serie
          }
        })
        .catch(function(errores) {
            console.log("Error: " + errores);
        });

});
var contenedorSeriesMayorPuntaje = document.querySelector('mayorPuntaje')

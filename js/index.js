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
      var url = "https://image.tmdb.org/t/p/original/"
      var contenedorSeriesMayorPuntaje = document.querySelector('#mayorPuntaje ul')

      var contenidoSlider = '';

      for (var i = 0; i < 10; i++) {
        poster = url + datos.results[i].poster_path
        contenidoSlider += `
          <li>
              <img src="${poster}" alt="">
          </li>
        `;
      }

      contenedorSeriesMayorPuntaje.innerHTML = contenidoSlider
    })
    .catch(function(errores) {
        console.log("Error: " + errores);
    });

    fetch(urlMasPopulares)
      .then(function(response) {
        return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
      })
      .then(function(datos) {

        var url = "https://image.tmdb.org/t/p/original/"

        var contenedorSeriesMasPopulares = document.querySelector('#masPopulares ul')
        var contenidoSlider = '';

        for (var i = 0; i < 10; i++) {
          poster = url + datos.results[i].poster_path
          contenidoSlider += `
            <li>
                <img src="${poster}" alt="">
            </li>
          `;
  }
        contenedorSeriesMasPopulares.innerHTML = contenidoSlider
      })
      .catch(function(errores) {
          console.log("Error: " + errores);
      });

    fetch(urAlAire)
    .then(function(response){
      return response.json()
        })
        .then(function(datos) {
          var url = "https://image.tmdb.org/t/p/original/"
          var contenedorSeriesAlAire = document.querySelector('#alAire ul')
          var contenidoSlider = '';

          for (var i = 0; i < 10; i++) {
            poster = url + datos.results[i].poster_path
            contenidoSlider += `
              <li>
                  <img src="${poster}" alt="">
              </li>
            `;
            }
            contenedorSeriesAlAire.innerHTML = contenidoSlider

        })
        .catch(function(errores) {
            console.log("Error: " + errores);
        });

});
var contenedorSeriesMayorPuntaje = document.querySelector('mayorPuntaje')

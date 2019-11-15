window.addEventListener('load',function(){
  //
  var api_key = "60be6317b0012697cb25d6ce427de920"
  // FECTH pedido asincronico a una URL.
  var urlAccion = "https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=accion.desc&page=1&with_genres=18"
  var urlComedias = "https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=comedia.desc&page=1&with_genres=18"
  var urlDrama = "https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=drama.desc&page=1&with_genres=18"
  var urlRomance = "https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=romance.desc&page=1&with_genres=18"
  var urlTerror = "https://api.themoviedb.org/3/discover/tv?api_key="+api_key+"&sort_by=terror.desc&page=1&with_genres=18"

//EMPIEZA ACCION
  fetch(urlAccion)
    .then(function(response) {
      return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
    })
    .then(function(datos) {
      var url = "https://image.tmdb.org/t/p/original/"
      var contenedorSeriesAccion = document.querySelector('#mayorPuntaje ul')

      var contenidoSlider = '';

      for (var i = 0; i < 10; i++) {
        poster = url + datos.results[i].poster_path
        contenidoSlider += `
          <li>
              <img src="${poster}" alt="">
          </li>
        `;
      }
      contenedorSeriesAccion.innerHTML = contenidoSlider
    })
    .catch(function(errores) {
        console.log("Error: " + errores);
    });
//TERMINA ACCION

    //EMPIEZA COMEDIAS

    fetch(urlComedias)
      .then(function(response) {
        return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
      })
      .then(function(datos) {

        var url = "https://image.tmdb.org/t/p/original/"

        var contenedorComedias = document.querySelector('#masPopulares ul')
        var contenidoSlider = '';

        for (var i = 0; i < 10; i++) {
          poster = url + datos.results[i].poster_path
          contenidoSlider += `
            <li>
                <img src="${poster}" alt="">
            </li>
          `;
  }
        contenedorComedias.innerHTML = contenidoSlider
      })
      .catch(function(errores) {
          console.log("Error: " + errores);
      });

//TERMINA COMEDIAS

//EMPIEZA DRAMA

    fetch(urlDrama)
    .then(function(response){
      return response.json()
        })
        .then(function(datos) {
          var url = "https://image.tmdb.org/t/p/original/"
          var contenedorDrama = document.querySelector('#alAire ul')
          var contenidoSlider = '';

          for (var i = 0; i < 10; i++) {
            poster = url + datos.results[i].poster_path
            contenidoSlider += `
              <li>
                  <img src="${poster}" alt="">
              </li>
            `;
            }
            contenedorDrama.innerHTML = contenidoSlider

        })
        .catch(function(errores) {
            console.log("Error: " + errores);
        });

//TERMINA DRAMA

//EMPIEZA ROMANCE

        fetch(urlRomance)
        .then(function(response){
          return response.json()
            })
            .then(function(datos) {
              var url = "https://image.tmdb.org/t/p/original/"
              var contenedorRomance = document.querySelector('#alAire ul')
              var contenidoSlider = '';

              for (var i = 0; i < 10; i++) {
                poster = url + datos.results[i].poster_path
                contenidoSlider += `
                  <li>
                      <img src="${poster}" alt="">
                  </li>
                `;
                }
                contenedorRomance.innerHTML = contenidoSlider

            })
            .catch(function(errores) {
                console.log("Error: " + errores);
            });

//TERMINA ROMANCE

//EMPIEZA TERROR

        fetch(urlTerror)
         .then(function(response){
            return response.json()
            })
            .then(function(datos) {
              var url = "https://image.tmdb.org/t/p/original/"
              var contenedorTerror = document.querySelector('#alAire ul')
              var contenidoSlider = '';

              for (var i = 0; i < 10; i++) {
                poster = url + datos.results[i].poster_path
                contenidoSlider += `
                  <li>
                    <img src="${poster}" alt="">
                  </li>
                    `;
                    }
                  contenedorTerror.innerHTML = contenidoSlider

              })
               .catch(function(errores) {
                  console.log("Error: " + errores);
              });

//TERMINA TERROR

});




var contenedorAccion = document.querySelector('accion')

var contenedorComedias = document.querySelector('comedias')

var contenedorDrama = document.querySelector('drama')

var contenedorRomance = document.querySelector('romance')

var contenedorTerror = document.querySelector('terror')

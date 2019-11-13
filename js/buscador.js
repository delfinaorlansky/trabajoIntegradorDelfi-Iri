//window.addEventListener('load',function(){
  //
  //var api_key = "60be6317b0012697cb25d6ce427de920"
  // FECTH pedido asincronico a una URL.
  //var urlBuscador = " https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&query=<<texto_a_buscar>>&page=1&include_adult=true"

  //fetch(urlBuscador)
  //  .then(function(response) {
  //    return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
  //  })
  //  .then(function(datos) {
  //    var url = "https://image.tmdb.org/t/p/original/"
  //    var contenedorBuscador = document.querySelector('#mayorPuntaje ul')

  //    var contenidoSlider = '';

    //  for (var i = 0; i < 10; i++) {
    //    poster = url + datos.results[i].poster_path
      //  contenidoSlider += `
      //    <li>
        //      <img src="${poster}" alt="">
      //    </li>
    //    `;
  //    }

  //    contenedorBuscador.innerHTML = contenidoSlider
  //  })
  //  .catch(function(errores) {
  //      console.log("Error: " + errores);
  //  });

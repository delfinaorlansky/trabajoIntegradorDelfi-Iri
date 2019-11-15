window.addEventListener('load',function(){
  // 1. Capturo lo que vino por el query string
  var queryStringObj = new URLSearchParams(window.location.search);

  // 2. Guardo la palabra de busqueda para pasarla luego a la URL del FETCH
  var idSerie = queryStringObj.get('idDeSerie');

  console.log(idSerie);

  fetch('https://api.themoviedb.org/3/tv/' + idSerie + '?api_key=ea80e737250396f3fbaef5f707b13894&language=en-US')
    .then(function(response){
      return response.json();
    })
   .then(function(objetoLiteralSerie){
    console.log(objetoLiteralSerie);

      // 4. Capturo el UL donde quiero meter todos los resultados
       var listaResultados = document.querySelector('#detalle');
      // 5. Iteramos el array de resultados y creamos una variable donde vamos a generar el html
      var contenidoFinal = '';

        // 6. Hacemos un IF para consultar si el resultado tiene imagen. Si es asi generamos el contenido

          // 7. Generamos un <li> y una <img> por cada serie encontrada
       contenidoFinal += '<div class="detalle-contenedor">'; // con detalle-contenedor esa clase armo el css
       if (objetoLiteralSerie.poster_path != null) {
       contenidoFinal +=    '<img src="https://image.tmdb.org/t/p/original/' + objetoLiteralSerie.poster_path + '" alt="la imagen">';
       }
       contenidoFinal +=    '<p>' + objetoLiteralSerie.name + '</p>';
       contenidoFinal +=    '<p>' + objetoLiteralSerie.overview + '</p>';
       contenidoFinal +=    '<p>'+ objetoLiteralSerie.original_language + '</p>';
       contenidoFinal +=    '<p>'+ objetoLiteralSerie.first_air_date + '</p>';
       for (var i = 0; i < objetoLiteralSerie.genres.length; i++) {
         contenidoFinal +=    '<p>'+ objetoLiteralSerie.genres[i].name + '</p>';
       }

       contenidoFinal += '</div>';



      // 8. Insertamos el contenido final en el HTML del buscador
      listaResultados.innerHTML += contenidoFinal;


})
})

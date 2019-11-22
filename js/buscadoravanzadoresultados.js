window.addEventListener('load',function(){
  // 1. Capturo lo que vino por el query string
  var queryStringObj = new URLSearchParams(window.location.search);

  // 2. Guardo la palabra de busqueda para pasarla luego a la URL del FETCH
  var generoBuscado = queryStringObj.get('genre'); //esta palabra es la que estaba esricto en la url y yo borre//
  var añoEstreno = queryStringObj.get('date_release')
  var ordenVotos = queryStringObj.get('order')
  //SEND REQUEST
  //https://api.themoviedb.org/3/discover/tv?api_key=ea80e737250396f3fbaef5f707b13894&language=en-US&sort_by=popularity.desc&first_air_date_year=YEAR&page=1&timezone=America%2FNew_York&with_genres=GENEROS&without_genres=GENEROS&include_null_first_air_dates=false
  fetch('https://api.themoviedb.org/3/discover/tv?api_key=ea80e737250396f3fbaef5f707b13894&language=en-US&sort_by='+ ordenVotos +'&first_air_date_year='+ añoEstreno +'&page=1&timezone=America%2FNew_York&with_genres=' + generoBuscado + '&without_genres=32&include_null_first_air_dates=false')
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteral){
      // 3. Guardo el array de resultados en una variable
      var resultados = objetoLiteral.results;

      // 4. Capturo el UL donde quiero meter todos los resultados
      var listaResultados = document.querySelector('#buscador');

      // 5. Iteramos el array de resultados y creamos una variable donde vamos a generar el html
      var contenidoFinal = '';

      for (var unResultado of resultados) {
        // 6. Hacemos un IF para consultar si el resultado tiene imagen. Si es asi generamos el contenido
        if (unResultado.poster_path != null) {
          // 7. Generamos un <li> y una <img> por cada serie encontrada
          contenidoFinal += '<li>';
          contenidoFinal += '<img src="https://image.tmdb.org/t/p/original/' + unResultado.poster_path + '" alt="la imagen">';
          contenidoFinal += '<p>' + unResultado.name + '</p>';
          contenidoFinal += '<a href="detalle.html?idDeSerie='+ unResultado.id +'">VER MAS</a>';
          contenidoFinal += '</li>';
        }
      }

      // 8. Insertamos el contenido final en el HTML del buscador
      listaResultados.innerHTML = contenidoFinal;

    })
})

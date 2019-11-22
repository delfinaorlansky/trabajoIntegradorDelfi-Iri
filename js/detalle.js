window.addEventListener('load',function(){
  // 1. Capturo lo que vino por el query string
  var queryStringObj = new URLSearchParams(window.location.search);

  // 2. Guardo la palabra de busqueda para pasarla luego a la URL del FETCH
  var idSerie = queryStringObj.get('idDeSerie');

  console.log(idSerie);

  fetch('https://api.themoviedb.org/3/tv/' + idSerie + '?api_key=60be6317b0012697cb25d6ce427de920&language=en-US')
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


   fetch("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=60be6317b0012697cb25d6ce427de920&language=en-US")
     .then(function(respuesta) {
       return respuesta.json();
     })
     .then(function(datos) {
       console.log(datos);
       var div_trailer = document.querySelector(".contenedor-trailers");
       var trailer = datos.results;

       for (var i = 0; i < trailer.length; i++) {
         div_trailer.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + datos.results[i].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


       }
     })

       contenidoFinal += '</div>';
      // 8. Insertamos el contenido final en el HTML del buscador
      listaResultados.innerHTML += contenidoFinal;
})
})
// RECOMENDACIONES
var queryStringObj = new URLSearchParams(window.location.search);
var urlFija = "https://image.tmdb.org/t/p/original/";
function createItemHtml(clase, titulo, imagen, idSerie) {

  serie = '<li class="'+ clase + '">'
  serie +=     '<a href="detalles.html?idSerie='+idSerie+'&nombreSerie='+titulo+'" >'
  serie +=      '<h2>'+ titulo +'</h2>'
  serie +=      '<img src="'+ imagen +'" alt="">'
  serie +=    '</a>'
  serie +=  '</li>';

  return serie;
}


var idSerie = queryStringObj.get('idDeSerie');
var urlRecomendaciones = "https://api.themoviedb.org/3/tv/"+idSerie+"/recommendations?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US&page=1"
   fetch(urlRecomendaciones)
     .then(function(response) {
       return response.json();
     })
     .then(function(resultados) {
       console.log(resultados);
       var recoContainer = document.querySelector(".reco");
         for (var i = 0; i < resultados.results.length; i++) {
           titulo = resultados.results[i].name
           img_src = urlFija + resultados.results[i].poster_path

           var serie = createItemHtml("reco-items", titulo, img_src, resultados.results[i].id) ;
           recoContainer.innerHTML += serie
         }

       })

var sectionRecomendaciones = document.querySelector(".sectionRecomendaciones")


var botonRecomendaciones = document.getElementById("botonRecomendaciones")
botonRecomendaciones.onclick = function onclick(){
 sectionRecomendaciones.style.display = "block";
  console.log(sectionRecomendaciones.style.display);
 console.log(botonRecomendaciones);
}


    //  document.querySelector ("#recomendaciones").addEventListener("click", function () {
    // fetch("https://api.themoviedb.org/3/movie/" + idSerie + "/recommendations?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1")
    // })

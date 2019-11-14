window.addEventListener('load',function(){
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
  var queryStringObj=new URlSearchParams(window.location.search);
  var busqueda = queryStringObj.get("buscador");
  console.log(busqueda);
var url = ""
  fetch('https://api.themoviedb.org/3/search/tv?api_key=ea80e737250396f3fbaef5f707b13894&query=
'+busqueda);
.then(function(response){
  return response.json();
})
.then(function(objetoLiteral){
  console.log(objetoLiteral);
})
var arrayDeSeries = informacion.results
for (var i=0; i < arrayDeSeries.length; i++) {
  var titulo = arrayDeSeries[i].original_name
  var poster = arrayDeSeries[i].poster_path
  var id = arrayDeSeries[i].id
  var resumen = arrayDeSeries[i].overview
  var fecha = arrayDeSeries[i].first_air_date
  var puntos = arrayDeSeries[i].vote_average
  document.querySelector (".series").innerHTML += '<div class= "series">
    <a class="poster" posArray=" " + i + "" + '" idSeries"' + id + ""
    href= "#modal-example" uk-toggle> <img src="https://image.tmdb.org/t/p/original'" + poster +'" width= "300px" alt=""> </a></div>'
}
var posters = document.querySelectorAll(".poster")
for (var i = 0; i <posters.length; i++){
  posters[i].addEventListener("click", function (){
    id = this.getAttribute("idSeries")
    pos = this.getAttribute("posArray")
    series = arrayDeSeries [pos]
    titulo = series.original_name
    resumen = series.overview
    document.querySelector(".el-titular").innerHTML = titulo
      document.querySelector(".el-resumen").innerHTML = resumen
      document.querySelector("#elVerMas").style.display = "none"
      document.querySelector("#vamos").style.display = "block"
      document.querySelector("#vamos").setAttribute("idSeries", id)
      document.querySelector("elDivFav").innerHTML = '<button class= "miBoton" id="botonFavoritos" name"' + id + '">&#9733;</button>'
var boton = document.querySelector('#botonFavoritos')
boton.addEventListener("click", function () {
  var id = boton.name
})
})
}
})
}

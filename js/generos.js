window.addEventListener("load", function() {
  console.log("Generos");
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=60be6317b0012697cb25d6ce427de920&language=en-US")
     .then(function(respuesta) {
       return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
       var div = document.querySelector(".container-GenerosGeneral");
      var gnre = datos.genres;
   var accion = document.querySelector(".action")
   var animation = document.querySelector(".animation")
   var comedy = document.querySelector(".comedy")
   var crime = document.querySelector(".crime")
   var documentary = document.querySelector(".documentary")
   var drama = document.querySelector(".drama")s
  var kids = document.querySelector(".kids")
   var mistery = document.querySelector(".mistery")
   var scifi = document.querySelector(".scifi")
   var war = document.querySelector(".war")
   accion.innerHTML += "<a href='pagina3.html?id=10759&name="Action & Adventure"'>"
  animation.innerHTML
      for (var i = 0; i < gnre.length; i++) {
        div.innerHTML += '<li><a href="pagina3.html?id=' + datos.genres[i].id + '&name=' + datos.genres[i].name + '">' + datos.genres[i].name + '</a></li>'
        }

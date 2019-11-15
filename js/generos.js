window.addEventListener('load',function(){
  //
  var api_key = "60be6317b0012697cb25d6ce427de920"
  // FECTH pedido asincronico a una URL.
  var urlListaGeneros = "https://api.themoviedb.org/3/genre/tv/list?api_key="+api_key


  fetch(urlListaGeneros)
    .then(function(response) {
      return response.json() // el servidor me responde con un string en formato JSON, gracias a eso lo transformo en un objeto literal.
    })
    .then(function (datos) {
     console.log(datos)
     var generoHtml = document.querySelector('.listaGeneros')
     var id = datos.id
     for (var genero of datos.genres) {
       generoHtml.innerHTML += `
         <li>
             <a href="generos.html?idDeGenero=${genero.id}&nombreDeGenero=${genero.name}"> ` + genero.name +  `</a></li>`;
     }
    })
    .catch(function(errores) {
        console.log("Error: " + errores);
    })

  })

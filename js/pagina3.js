window.addEventListener("load", function() {
  var querystring = location.search;
  var query2 = new URLSearchParams(querystring)
  var id = query2.get("id")
  var page = 1;
  vermas()

  function vermas() {
    var url = "https://api.themoviedb.org/3/discover/tv?api_key=60be6317b0012697cb25d6ce427de920&language=en-US&sort_by=popularity.desc&page=2" + page + "&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=" + id;
    console.log("vermas");
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(datos) {
        console.log(datos);
        var div = document.querySelector(".url-SeriesGeneros");
        var series = datos.results;

        var titulo = document.querySelector("#title");
        var name = query2.get("nombre")
        titulo.innerHTML = name;

        for (var i = 0; i < series.length; i++) {
          if (datos.results[i].path == null) {
            var photo = document.querySelector('.url-SeriesGeneros');
            photo.innerHTML += '<li><a href="detalle.html?id=' + datos.results[i].id + '"> ' + '<img src="img/error.png">' + '</a></li>'
          }

      for (var i = 0; i < series.length; i++) {
        div.innerHTML += '<li><a href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
      }
      if (datos.total_pages == page) {
        console.log('cortamo');
        window.removeEventListener('scroll', scrolled)
        return

        }
        })


  }

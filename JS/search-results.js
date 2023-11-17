let queryBusqueda = location.search;
let queryString = new URLSearchParams(queryBusqueda);
let peliculaBuscada = queryString.get("pelicula");
let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";
let post = document.querySelector(".postbusqueda");
fetch(
  `https://api.themoviedb.org/3/search/multi?query=${peliculaBuscada}&api_key=${acaVaLaAPIKey}`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; data.results.length; i++) {
      if (data.results[i].title == null) {
        i++;
      } else if (data.results[i].poster_path == null) {
        i++;
      } else {
        post.innerHTML += `
            <article class="imagene">
                <a href= "./detail-movie.html?id=${data.results[i].id}">
                    <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    <p>"${data.results[i].title}"
                </a><br><br>Año: ${data.results[i].release_date}</a>
            </article>
            `;
      }
    }
  })
  .catch(function (err) {
    console.log(err);
  });

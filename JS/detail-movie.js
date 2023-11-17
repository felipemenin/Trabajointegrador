let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle);
let id_pelicula = queryStringDetalle.get("id");
let todo = document.querySelector(".detallep");
let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";

fetch(
  `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    todo.innerHTML = `
    <h1 class="titulodet">${data.title}</h1>
    <div class="separador">
    <img class="fotodet" src="https://image.tmdb.org/t/p/w500${data.backdrop_path}">
    <p class="textod">
    ${data.overview}
    <br><br>Duracion: ${data.runtime}mins
    <br>Genero:<a> ${data.genres[0].name}
    <br>Fecha de estreno: ${data.release_date}
    <br>Calificacion: ${data.vote_average}
    </p>
    </div>
    `;
  })
  .catch(function (error) {
    console.log(error);
  });

let cargar = document.querySelector(".recomendaciones");
cargar.innerHTML += `
<article>
    <button class="recomm">RECOMENDACIONES</button>
</article>
`;
cargar.addEventListener("click", function () {
  fetch(
    `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${acaVaLaAPIKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < 5; i++) {
        cargar.innerHTML += `
            <article class="imagene">
                <a href= "./detail-movie.html?id=${data.results[i].id}">
                    <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    <p>${data.results[i].title}
                </a><br><br>Año: ${data.results[i].release_date}</a>
            </article>
            `;
      }
    });
});

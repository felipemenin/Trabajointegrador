let queryGenero = location.search;
let queryStringGenre = new URLSearchParams(queryGenero);
let id = queryStringGenre.get("id");
let nombre = queryStringGenre.get("name");

let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";
let contenedor = document.querySelector(".mejoresvaloradas1");
let nombree = document.querySelector(".nombresito");

fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id}`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    nombree.innerHTML += `
    <h2>${nombre}:</h2>
    `;
    for (let i = 0; i < data.results.length; i++) {
      contenedor.innerHTML += `
        <article class="imagene">
            <a href= "./detail-movie.html?id=${data.results[i].id}">
                <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                <p>${data.results[i].name}
            </a><br><br>Año: ${data.results[i].first_air_date}</a>
        </article>
        `;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

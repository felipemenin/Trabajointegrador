let container1 = document.querySelector(".fotoss");
let container2 = document.querySelector(".fotosss");
let container3 = document.querySelector(".pepe");
let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
      container1.innerHTML += `
        <article class="imagene">
            <a href= "./detail-movie.html?id=${data.results[i].id}">
                <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                <p class="fee">${data.results[i].title}
            </a><br><br>Año: ${data.results[i].release_date}</a>
        </article>
        `;
    }
  });
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
      container2.innerHTML += `
        <article class="imagene">
            <a href= "./detail-movie.html?id=${data.results[i].id}">
                <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                <p class="fee">${data.results[i].title}
            </a><br><br>Año: ${data.results[i].release_date}</a>
        </article>
        `;
    }
  });
fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
      container3.innerHTML += `
        <article class="imagene">
            <a href= "./detail-serie.html?id=${data.results[i].id}">
                <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                <p class="fee">${data.results[i].name}
            </a><br><br>Año: ${data.results[i].first_air_date}</a>
        </article>
        `;
    }
  });

let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";
let genrespelis = document.querySelector(".genres")
let genresseries = document.querySelector(".genress")


fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for(let i = 0; i<10; i++){
        genrespelis.innerHTML+=`
        <article class= "caca">
            <a href= "./detail-genres-movie.html?id=${data.genres[i].id}&name=${data.genres[i].name}">
                <p class="generitos">"${data.genres[i].name}"</p>
            </a>
        </article>
        `
    }
  });

  fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for(let i = 0; i<10; i++){
        genresseries.innerHTML+=`
        <article class="caca">
            <a href= "./detail-genres-serie.html?id=${data.genres[i].id}&name=${data.genres[i].name}">
                <p class="generitos">"${data.genres[i].name}"
        </article>
        `
    }
  });
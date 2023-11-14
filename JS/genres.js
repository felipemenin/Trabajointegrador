let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78";
let genrespelis = document.querySelector(".genres")
let genresseries = document.querySelector(".genresseries")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    for(let i = 0; i<data.genres.length; i++){
        genrespelis.innerHTML+=`
        <article>
            <a href= "./detail-genres.html">
                <p>"${data.genres[i].name}"
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
    for(let i = 0; i<data.genres.length; i++){
        genresseries.innerHTML+=`
        <article class="recomendaciones">
            <a href= "./detail-genres.html">
                <p>"${data.genres[i].name}"
        </article>
        `
    }
  });
let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let id_serie = queryStringDetalle.get("id")
let todo = document.querySelector(".detallbb")
let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78"

fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    todo.innerHTML = `
    <h1 class="titbb">"${data.name}"</h1>
    <div class="separador">
    <img class="fotobb" src="https://image.tmdb.org/t/p/w500${data.poster_path}">
    <p class="detallitos">
    ${data.overview}
    <br><br>Fecha de estreno: ${data.first_air_date}
    <br>Calificacion: ${data.vote_average}
    </p>
    </div>
    `
})
.catch(function(error){
    console.log(error)
})
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

let cargar = document.querySelector(".recomendaciones")
cargar.innerHTML += `
<article>
    <button class="recomm">RECOMENDACIONES</button>
</article>
`
cargar.addEventListener("click", function(){
    fetch(`https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for(let i=0; i<5;i++){
            cargar.innerHTML+=
            `
            <article class="imagene">
                <a href= "./detail-serie.html?id=${data.results[i].id}">
                    <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    <p>"${data.results[i].name}"
                </a><br><br>Año: ${data.results[i].first_air_date}</a>
            </article>
            `
        }
    })
})
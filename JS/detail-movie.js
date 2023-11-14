let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let id_pelicula = queryStringDetalle.get("id")
let todo = document.querySelector(".detallep")
let acaVaLaAPIKey = "709280f7a436019eb21b72bc1317fa78"

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    todo.innerHTML = `
    <h1 class="titulodet">${data.results[id_pelicula].title}"</h1>
    <div class="separador">
    <img class="fotodet" src="https://image.tmdb.org/t/p/w500${data.results[id_pelicula].poster_path}">
    <p class="textod">
    ${data.results[id_pelicula].overview}
    <br><br>Fecha de estreno: ${data.results[id_pelicula].release_date}
    <br>Calificacion: ${data.results[id_pelicula].vote_average}
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
    <button onClick="cargarMas">Recomendaciones</button>
</article>
`
cargar.addEventListener("click", function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=709280f7a436019eb21b72bc1317fa78`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for(let i=0; i<5;i++){
            cargar.innerHTML+=
            `
            <article class="imagene">
                <a href= "./detail-movie.html">
                    <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    <p>"${data.results[i].title}"
                </a><br><br>Año: ${data.results[i].release_date}</a>
            </article>
            `
        }
    })
})
let queryGenero = location.search;
let queryStringGenre = new URLSearchParams(queryGenero)
let id = queryStringGenre.get("id")
let type = queryStringGenre.get("type")
let acaVaLaAPIKey = '709280f7a436019eb21b72bc1317fa78'
let contenedor = document.querySelector(".mejoresvaloradas1")

fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${acaVaLaAPIKey}&with_genres=${id}`)
.then(function(resp){
    return resp.json()

    
})
.then(function(data){
    console.log(data)
    for(let i=0; i<data.results.length;i++){
        contenedor.innerHTML+=
        `
        <article class="imagene">
            <a href= "./detail-movie.html?id=${data.results[i].id}">
                <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                <p>"${data.results[i].title}"
            </a><br><br>Año: ${data.results[i].release_date}</a>
        </article>
        `
    }
})
.catch(function(error){
    console.log(error)
})

// fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${acaVaLaAPIKey}&with_genres=${id}`)
// .then(function(resp){
//     return resp.json()

    
// })
// .then(function(data){
//     console.log(data)
//     for(let i=0; i<data.results.length;i++){
//         contenedor.innerHTML+=
//         `
//         <article class="imagene">
//             <a href= "./detail-movie.html?id=${data.results[i].id}">
//                 <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
//                 <p>"${data.results[i].title}"
//             </a><br><br>Año: ${data.results[i].release_date}</a>
//         </article>
//         `
//     }
// })
// .catch(function(error){
//     console.log(error)
// })
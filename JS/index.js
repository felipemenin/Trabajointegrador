let container1= document.querySelector(".fotoss")
let container2=document.querySelector(".fotosss")
let container3= document.querySelector(".pepe")

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=709280f7a436019eb21b72bc1317fa78`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for(let i=0; i<5;i++){
        container1.innerHTML+=
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
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=709280f7a436019eb21b72bc1317fa78`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for(let i=0;i<5;i++){
        container2.innerHTML+=
        `
        <article class="imagene">
                <a href= "./detail-movie.html">
                    <img class="foto" src= "https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
                    <p>"${data.results[i].title}"
                </a><br><br>Año: ${data.results[i].release_date}<br>Calificacion: ${data.results[i].vote_average}</a>
            </article>
        `
        
    }
})
fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=709280f7a436019eb21b72bc1317fa78`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    for(let i=2;i<7;i++){
        container3.innerHTML+=
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

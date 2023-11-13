let queryBusqueda= location.search
let queryString= new URLSearchParams(queryBusqueda)
let peliculaBuscada= queryString.get('pelicula')
fetch(`https://api.themoviedb.org/3/search/movie?api_key=709280f7a436019eb21b72bc1317fa78`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})
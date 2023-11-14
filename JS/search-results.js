let queryBusqueda= location.search
let queryString= new URLSearchParams(queryBusqueda)
let peliculaBuscada= queryString.get('pelicula')
let acaVaLaAPIKey= "709280f7a436019eb21b72bc1317fa78"
fetch(`https://api.themoviedb.org/3/search/multi?query=${peliculaBuscada}&api_key=${acaVaLaAPIKey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    
})
.catch(function(err){
    console.log(err)
})
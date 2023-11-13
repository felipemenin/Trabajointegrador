fetch(`?api_key=709280f7a436019eb21b72bc1317fa78`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
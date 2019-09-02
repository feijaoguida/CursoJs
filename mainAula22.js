var minhaPromisse = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/feijaoguida');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 ){
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromisse()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
    
/*
//usando axios ele trabalha já com promises
//o codigo abaixo substitui todo o trexo acima.
axios.get('https://api.github.com/users/feijaoguida')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
*/
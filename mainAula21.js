var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/feijaoguida')
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    } 
}
//https://api.github.com/users/feijaoguida
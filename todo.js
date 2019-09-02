var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //este indexOf ira percorrer o array e recuperar o id
        //de acordo com o texto apresentado.
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode(' - Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorege();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    //o metodo splice remove uma quantidade de 
    //item do array baseado na possição que passar
    //no nosso caso, pos é a posição do item no array e 1 
    //é a quantidade de itens a ser excluidos
    todos.splice(pos, 1);
    renderTodos();
    saveToStorege();
}

function saveToStorege(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
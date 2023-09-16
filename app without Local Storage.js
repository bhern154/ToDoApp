const addItemForm = document.querySelector("#addItem");
const input = document.querySelector("#new-todo");
const toDoList = document.querySelector("#todoList");
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();

    }
    if(e.target.tagName === 'P'){
        e.target.classList.toggle("crossed");
        console.log(e.target.parentElement);
    }
});

addItemForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newItemText = document.createElement('li');
    const newButton = document.createElement('button');
    const newText = document.createElement('p');

    newButton.innerText = "X";
    newText.innerText = input.value;
    newItemText.appendChild(newText);
    newItemText.appendChild(newButton);
    toDoList.appendChild(newItemText);
    input.value='';

    savedTodos.push({ text: newText.innerText, checked: false });
    localStorage.setItem("todoList", JSON.stringify(savedTodos));
});

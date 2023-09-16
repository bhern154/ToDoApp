const addItemForm = document.querySelector("#addItem");
const input = document.querySelector("#new-todo");
const toDoList = document.querySelector("#todoList");

const localTodos = JSON.parse(localStorage.getItem("todos")) || [];

// retrieve todos from local storage
for (let i = 0; i < localTodos.length; i++) {
    let newTodo = document.createElement("li");
    let newText = document.createElement('p');
    newText.innerText = localTodos[i].text;
    let newButton = document.createElement('button');
    newButton.innerText = "X";

    if(localTodos[i].isChecked){
        newText.isChecked = true;
        newText.classList.toggle("crossed");
    } else {
        newText.isChecked = false;
    }
    
    newTodo.appendChild(newText);
    newTodo.appendChild(newButton);
    todoList.appendChild(newTodo);
  }

addItemForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newItemText = document.createElement('li');
    const newText = document.createElement('p');
    const newButton = document.createElement('button');

    newButton.innerText = "X";
    newText.innerText = input.value;
    newItemText.appendChild(newText);
    newItemText.appendChild(newButton);
    toDoList.appendChild(newItemText);
    input.value='';

    localTodos.push({ text: newText.innerText, isChecked: false });
    localStorage.setItem("todos", JSON.stringify(localTodos));
});

//Delete todo on "X" button click or cross out todo
toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        for (let i = 0; i < localTodos.length; i++) {
            if (localTodos[i].text === e.target.previousSibling.innerText) {
                localTodos.splice(i, 1);
                localStorage.setItem("todos", JSON.stringify(localTodos));
            }
        }
        e.target.parentElement.remove();
    }
    if(e.target.tagName === 'P'){
        e.target.classList.toggle("crossed");
        if(!e.target.isChecked){
            e.target.isChecked = true;
        } else{
            e.target.isChecked = false;
        }

        for (let i = 0; i < localTodos.length; i++) {
            if (localTodos[i].text === e.target.innerText) {
            localTodos[i].isChecked = !localTodos[i].isChecked;
            localStorage.setItem("todos", JSON.stringify(localTodos));
            }
        }
    }

});

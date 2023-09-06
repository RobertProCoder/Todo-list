    const todoInput = document.querySelector(".todo_input");
    const todoList = document.getElementById("todo-list");


        //Add eventListener
    const filter_todo = document.getElementById('select-todo').addEventListener('change', filterTodo);
    const todoButton = document.getElementById("todo-button").addEventListener('click', todoMain);
    
function todoMain(event){

    event.preventDefault();
    
    //Create Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.setAttribute('id', 'todo-div');

    // create the li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");   
    todoDiv.appendChild(newTodo);
    //check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-btn");
    checkButton.setAttribute('id', 'check-button');
    checkButton.addEventListener('click', deleteCheck);
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkButton);
    
    //trash button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.setAttribute('id', 'trash-button');
    trashButton.addEventListener('click', deleteCheck);
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    //d conste button
    if(item.classList.contains('trash-btn')){
        const todo = item.parentElement;
        todo.remove(); 
    }

    //check button
    if(item.classList[0] === 'check-btn'){
        todo = item.parentElement;
        todo.classList.toggle("completed");

    }
    
}

    function filterTodo(e){
        const todos = todoList.childNodes;

        todos.forEach(function(todo){
         switch (e.target.value){
             case "all":
                 todo.style.display = "flex";
                 break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else {
                    todo.style.display =  "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else {
                    todo.style.display =  "none";
                }
                break;
         }
    })
}

//selector
const todoList = document.querySelector('.list');

//functions
export function saveTodos(todo) {
    //check to see if local storage already exists
    let todos;
    if (localStorage.getItem('list') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('list'));
    }
    //add new todo to local storage
    todos.push(todo);
    localStorage.setItem('list', JSON.stringify(todos));
}
//remove todo from local storage
export function removeTodo(todo) {
    //check to see if local storage already exists
    let todos;
    if (localStorage.getItem('list') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('list'));
    }
    //remove todo from local storage
    const todoIndex = todo.textContent;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('list', JSON.stringify(todos));
}
//load todos
export function loadTodos() {
    let todos;
    if (localStorage.getItem("list") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("list"));
    }
    todos.forEach(function(todo) {
      //Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      //Create list
      const newList = document.createElement("li");
      newList.classList.add("list");
      //Create text node and append to li
      newList.appendChild(document.createTextNode(todo));
      //Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.appendChild(document.createTextNode("X"));
      //Append delete button to li
      newList.appendChild(deleteButton);
      //checkbox
      newList.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
      //Append li to todo div
      todoDiv.appendChild(newList);
      //Append todo div to list
      todoList.appendChild(todoDiv);
    });
}
//filter load todos
export function filterAllTodos() {
    const todos = todoList.children;
    for (let i = 0; i < todos.length; i++) {
        todos[i].style.display = 'flex';
    }
}
//filter completed todos when selected. This worked before the local storage was added. I couldn't figure out if the error was coming from the checked box or if the new list from local storage was not being added to the completed list.*/
export function filterCompletedTodos() {
    const todos = todoList.children;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].classList.contains('checked')) {
        //display items that are checked
            todos[i].style.display = 'flex';
        } else {
            todos[i].style.display = 'none';
        }
    }
}
//function filterActiveTodos() dislays todo tasks that are not completed
export function filterActiveTodos() {
    const todos = todoList.children;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].classList.contains('checked')) {
            todos[i].style.display = 'none';
        } else {
            todos[i].style.display = 'flex';
        }
    }
}

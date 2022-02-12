import { loadTodos, filterActiveTodos, filterAllTodos, filterCompletedTodos } from './ls.js';
import { addTodo, deleteTodo, countItems} from './utilities.js';
const todoInput = document.querySelector('.todo-input');
//selectors
const todoButton = document.querySelector('.add-button');
const todoList = document.querySelector('.list');
const filterAll = document.querySelector('#all-button');
const filterCompleted = document.querySelector('#completed-button');
const filterActive = document.querySelector('#active-button');
//array to store todos I thik this is what you wanted us to do but I had had trouble with the local storage.
const todo = {
    id: Date(),
    content: todoInput.value,
    completed: false
};

//function to display todo id and content in completed todo list
export function displayTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newList = document.createElement("li");
    newList.classList.add("list");
    newList.appendChild(document.createTextNode(todo.id + " " + todo.content));
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.appendChild(document.createTextNode("X"));
    newList.appendChild(deleteButton);
    todoDiv.appendChild(newList);
    todoList.appendChild(todoDiv);
    eventListeners();
}
//function for all the event listeners
function eventListeners() {
    todoButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteTodo);
    filterAll.addEventListener('click', filterAllTodos);
    filterCompleted.addEventListener('click', filterCompletedTodos);
    filterActive.addEventListener('click', filterActiveTodos);
    document.addEventListener('DOMContentLoaded', loadTodos);
    document.addEventListener('DOMContentLoaded', countItems);
    document.addEventListener('DOMContentLoaded', filterAllTodos);    
};

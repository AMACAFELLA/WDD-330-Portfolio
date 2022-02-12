//import saveTodos from './ls.js';
import { saveTodos, removeTodo } from './ls.js';

const todoInput = document.querySelector('.todo-input');
//selectors
const todoList = document.querySelector('.list');

export function addTodo(event) {
    //create li element
    const todo = document.createElement('li');
    todoList.addEventListener('click', deleteTodo);
    //add class
    todo.className = 'list';
    //create text node and append to li
    todo.appendChild(document.createTextNode(todoInput.value));
    //add list to local storage
    saveTodos(todoInput.value);
    //create delete button element
    const deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'delete';
    //append text node
    deleteButton.appendChild(document.createTextNode('X'));
    //append delete button to li
    todo.appendChild(deleteButton);
    //append li to list
    todoList.appendChild(todo);
    //clear input
    todoInput.value = '';
}
export function deleteTodo(event) {
    const item = event.target;
    //delete todo and remove from local storage
    if (item.classList[0] === 'delete') {
        const todo = item.parentElement;
        todo.remove();
        removeTodo(todo);
    }
}
//function to count how many items are in the list and create a message to display how many items are left in the numberOflist div
export function countItems() {
    var list = document.querySelector('ul');
    var items = list.children;
    var numberOfItems = items.length;
    var numberOfList = document.querySelector('.numberOfList');
    numberOfList.innerHTML = numberOfItems + " tasks left";
    //when item is checked, count down the number of items left
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            numberOfItems--;
            numberOfList.innerHTML = numberOfItems + " tasks left";
        }
    }); 
    //when item is deleted, count number of items
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'BUTTON') {
        numberOfItems--;
        numberOfList.innerHTML = numberOfItems + " tasks left";
      }
    }, false);   
} 
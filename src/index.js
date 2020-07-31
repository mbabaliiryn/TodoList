import './style.css';
import todoFactory from './todo_factory';
import projectFactory from './project_factory';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = '123';
contentTag.appendChild(h1);

const todo1 = todoFactory("new todo", "", "", "5", "", []);
console.log(todo1.getTitle());
const todo2 = todoFactory("A second todo", "", "", "5", "", []);
const todo3 = todoFactory("todo in the end", "", "", "5", "", []);

const proj1 = projectFactory([todo1, todo2, todo3]);
proj1.printItems();
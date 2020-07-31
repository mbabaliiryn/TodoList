import './style.css';
import todoFactory from './todo_factory';
import projectFactory from './project_factory';
import getNewTodoForm from './form_builder/todo_form';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);


const todoForm = getNewTodoForm();
contentTag.appendChild(todoForm);

console.log(projectFactory());
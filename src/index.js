import 'accordion/src/accordion.css';
import './styles/style.scss';
import getNewTodoButton from './add_todo_btn';
import getNewProjectButton from './add_project_btn';
import render from './display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h2');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);
displaySection.appendChild(getNewProjectButton());
displaySection.appendChild(getNewTodoButton());
contentTag.appendChild(displaySection);
render();

import 'accordion/src/accordion.css';
import './styles/style.scss';
import getTodoModal from './todo_modal';
import getNewProjectButton from './add_project_btn';
import render from './display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

const modals = document.createElement('div');
modals.appendChild(getTodoModal());
contentTag.appendChild(modals);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h2');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);
displaySection.appendChild(getNewProjectButton());
contentTag.appendChild(displaySection);
render();

import './styles/style.scss';
import getNewTodoForm from './form_builder/todo_form';
import { getAppData } from './data';
import addNewTodoToProject from './methods';
import render from './display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

// allow switching between project (const -> let)
const { defaultProject, otherProjects } = getAppData();
const currentProject = defaultProject;

const formSection = document.createElement('section');
formSection.id = 'form-section';
const todoForm = getNewTodoForm(addNewTodoToProject, currentProject.getId());
formSection.appendChild(todoForm);
contentTag.appendChild(formSection);

// Temporary to display added todos and projects
const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h3');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);
contentTag.appendChild(displaySection);
render();

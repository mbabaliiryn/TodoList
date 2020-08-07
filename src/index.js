import 'accordion/src/accordion.css';
import './styles/style.scss';
import { getAppData } from './data';
import getNewTodoForm from './form_builder/todo_form';
import getProjectForm from './form_builder/project_form';
import { addNewTodoToProject, createNewProject } from './methods';
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
contentTag.appendChild(formSection);
const todoForm = getNewTodoForm(addNewTodoToProject, currentProject.getId());
formSection.appendChild(todoForm);

// Temporary to display added todos and projects
const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h2');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);
contentTag.appendChild(displaySection);

const addProjectButton = document.createElement('button');
addProjectButton.id = 'add-project-btn';
addProjectButton.textContent = 'Add Project';
displaySection.appendChild(addProjectButton);

const newProjectFormModal = document.createElement('div');
newProjectFormModal.id = 'add-project-form-box';
newProjectFormModal.className = 'modal';
displaySection.appendChild(newProjectFormModal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
newProjectFormModal.appendChild(modalContent);

const modalHeader = document.createElement('div');
modalHeader.className = 'modal-header';
modalContent.appendChild(modalHeader);
const closeBtn = document.createElement('span');
closeBtn.className = 'close';
closeBtn.innerHTML = '&times;';
modalHeader.appendChild(closeBtn);
const headerText = document.createElement('h2');
headerText.textContent = 'Enter Project Name';
modalHeader.appendChild(headerText);

const modalBody = document.createElement('div');
modalContent.appendChild(modalBody);
modalBody.className = 'modal-body';
const newProjectForm = getProjectForm(createNewProject);
modalBody.appendChild(newProjectForm);

addProjectButton.onclick = () => { newProjectFormModal.style.display = 'block'; };
closeBtn.onclick = () => { newProjectFormModal.style.display = 'none'; };

render();

import 'accordion/src/accordion.css';
import './styles/style.scss';
import getModal from './modal';
import render from './display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

const modalContainer = document.createElement('div');
modalContainer.id = 'modal-box';
contentTag.appendChild(modalContainer);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';
const heading = document.createElement('h2');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);

const projectControls = document.createElement('div');
const addProjectButton = document.createElement('button');
addProjectButton.id = 'add-project-btn';
addProjectButton.textContent = 'Add Project';
projectControls.appendChild(addProjectButton);
addProjectButton.onclick = () => {
  modalContainer.appendChild(getModal('project'));
  const modal = document.getElementById('form-box');
  modal.classList.toggle('show-form');
};
displaySection.appendChild(projectControls);

contentTag.appendChild(displaySection);
render();

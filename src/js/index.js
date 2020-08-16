import 'accordion/src/accordion.css';
import '../css/style.scss';
import getModal from './form_builder/modal';
import render from './display/display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
h1.id = 'title-tag';
contentTag.appendChild(h1);

const modalContainer = document.createElement('div');
modalContainer.id = 'modal-box';
modalContainer.appendChild(getModal('project'));
modalContainer.appendChild(getModal('todo'));
contentTag.appendChild(modalContainer);

const displaySection = document.createElement('section');
displaySection.id = 'projects-data';

const projectControls = document.createElement('div');
projectControls.id = 'project-control';
const addProjectButton = document.createElement('button');
addProjectButton.id = 'add-project-btn';
addProjectButton.textContent = 'Add Project';
projectControls.appendChild(addProjectButton);
addProjectButton.onclick = () => {
  const modal = document.getElementById('project-form-box');
  modal.classList.toggle('show-form');
};
displaySection.appendChild(projectControls);

const attrib = document.createElement('div');
attrib.className = 'image-attrib';
attrib.innerHTML = `
<span>Photo by <a href="https://unsplash.com/@seantookthese?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sean O.</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
`;
document.body.appendChild(attrib);
contentTag.appendChild(displaySection);

render();

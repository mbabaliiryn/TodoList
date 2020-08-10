import getProjectForm from './form_builder/project_form';
import { createNewProject } from './methods';

const getAddProjectButton = () => {
  const addProjectButton = document.createElement('button');
  addProjectButton.id = 'add-project-btn';
  addProjectButton.textContent = 'Add Project';
  return addProjectButton;
};

const getAddProjectModal = () => {
  const addProjectModal = document.createElement('div');
  addProjectModal.id = 'add-project-form-box';
  addProjectModal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  addProjectModal.appendChild(modalContent);

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = () => { addProjectModal.classList.toggle('show-form'); };
  modalHeader.appendChild(closeBtn);
  const headerText = document.createElement('h2');
  headerText.textContent = 'Enter Project Name';
  modalHeader.appendChild(headerText);
  modalContent.appendChild(modalHeader);

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  const newProjectForm = getProjectForm(createNewProject);
  modalBody.appendChild(newProjectForm);
  modalContent.appendChild(modalBody);

  return addProjectModal;
};

const getAddProjectControls = () => {
  const projectControls = document.createElement('div');
  const addProjectButton = getAddProjectButton();
  projectControls.appendChild(addProjectButton);
  const addProjectModal = getAddProjectModal();
  projectControls.appendChild(addProjectModal);
  addProjectButton.onclick = () => { addProjectModal.classList.toggle('show-form'); };
  return projectControls;
};

export default getAddProjectControls;

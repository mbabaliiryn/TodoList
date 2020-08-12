import getTodoForm from './form_builder/todo_form';
import getProjectForm from './form_builder/project_form';
import { addNewTodoToProject, createNewProject } from './methods';


const getModal = (formType) => {
  const modal = document.createElement('div');
  modal.id = 'form-box';
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modal.appendChild(modalContent);

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = () => {
    const modalContainer = document.getElementById('modal-box');
    modalContainer.innerHTML = '';
  };
  modalHeader.appendChild(closeBtn);
  const headerText = document.createElement('h2');
  headerText.textContent = 'Enter Todo Details';
  modalHeader.appendChild(headerText);
  modalContent.appendChild(modalHeader);

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  let form;
  switch (formType) {
    case 'project':
      form = getProjectForm(createNewProject);
      break;
    case 'todo':
      form = getTodoForm(addNewTodoToProject);
      break;
    default:
      break;
  }
  modalBody.appendChild(form);
  modalContent.appendChild(modalBody);

  return modal;
};

export default getModal;

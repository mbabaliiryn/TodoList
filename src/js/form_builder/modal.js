import getTodoForm from './forms/todo_form';
import getProjectForm from './forms/project_form';
import { addNewTodoToProject, createNewProject } from './methods';


const getModal = (formType) => {
  const modal = document.createElement('div');
  modal.id = `${formType}-form-box`;
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
    const modalBox = document.getElementById(`${formType}-form-box`);
    modalBox.classList.toggle('show-form');
  };
  modalHeader.appendChild(closeBtn);
  const headerText = document.createElement('h2');
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  let form;
  switch (formType) {
    case 'project':
      form = getProjectForm(createNewProject);
      headerText.textContent = 'Enter Project Name';
      break;
    case 'todo':
      headerText.textContent = 'Enter Todo Details';
      form = getTodoForm(addNewTodoToProject);
      break;
    default:
      break;
  }
  modalHeader.appendChild(headerText);
  modalBody.appendChild(form);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  return modal;
};

export default getModal;

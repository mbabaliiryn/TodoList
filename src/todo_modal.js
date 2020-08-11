import getTodoForm from './form_builder/todo_form';
import { addNewTodoToProject } from './methods';

const getTodoModal = () => {
  const addTodoModal = document.createElement('div');
  addTodoModal.id = 'add-todo-form-box';
  addTodoModal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  addTodoModal.appendChild(modalContent);

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';
  closeBtn.onclick = () => { addTodoModal.classList.toggle('show-form'); };
  modalHeader.appendChild(closeBtn);
  const headerText = document.createElement('h2');
  headerText.textContent = 'Enter Todo Details';
  modalHeader.appendChild(headerText);
  modalContent.appendChild(modalHeader);

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  const newTodoForm = getTodoForm(addNewTodoToProject);
  modalBody.appendChild(newTodoForm);
  modalContent.appendChild(modalBody);

  return addTodoModal;
};

export default getTodoModal;

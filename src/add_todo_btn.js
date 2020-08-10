import getTodoForm from './form_builder/todo_form';
import { addNewTodoToProject } from './methods';

const getAddTodoButton = () => {
  const addTodoButton = document.createElement('button');
  addTodoButton.id = 'add-todo-btn';
  addTodoButton.textContent = 'Add Todo';
  return addTodoButton;
};

const getAddTodoModal = () => {
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
  closeBtn.onclick = () => { addTodoModal.style.display = 'none'; };
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

const getAddTodoControls = () => {
  const todoControls = document.createElement('div');
  const addTodoButton = getAddTodoButton();
  todoControls.appendChild(addTodoButton);
  const addTodoModal = getAddTodoModal();
  todoControls.appendChild(addTodoModal);
  addTodoButton.onclick = () => { addTodoModal.style.display = 'block'; };
  return todoControls;
};

export default getAddTodoControls;

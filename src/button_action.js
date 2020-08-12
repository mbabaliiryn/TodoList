import getModal from './modal';
import { getTodo } from './data';

const addTodoBtnAction = (projectId) => {
  const modalContainer = document.getElementById('modal-box');
  modalContainer.innerHTML = '';
  modalContainer.appendChild(getModal('todo'));
  document.forms['new-todo'].querySelector('#project-input').value = projectId;
  document.getElementById('form-box').classList.toggle('show-form');
};

const editTodoBtnAction = (todoId, projectId) => {
  const modalContainer = document.getElementById('modal-box');
  modalContainer.innerHTML = '';
  modalContainer.appendChild(getModal('todo'));
  const todo = getTodo(todoId, projectId);
  const {
    title,
    description,
    dueDate,
    priority,
    notes,
  } = todo.getAttributes();
  document.forms['new-todo'].querySelector('#todo-title-input').value = title;
  document.forms['new-todo'].querySelector('#todo-desc-input').value = description;
  document.forms['new-todo'].querySelector('#todo-duedate-input').value = dueDate;
  document.forms['new-todo'].querySelector('#todo-medium-priority').checked = false;
  document.forms['new-todo'].querySelector(`#todo-${priority}-priority`).checked = true;
  document.forms['new-todo'].querySelector('#todo-notes-input').value = notes;
  document.forms['new-todo'].querySelector('#project-input').value = projectId;
  document.forms['new-todo'].querySelector('#todo-input').value = todoId;
  document.forms['new-todo'].querySelector('input[type=submit]').value = 'Update Todo Details';
  document.getElementById('form-box').classList.toggle('show-form');
};

export { addTodoBtnAction, editTodoBtnAction };
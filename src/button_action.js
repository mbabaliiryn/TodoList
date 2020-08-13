import { getTodo } from './data';

const addTodoBtnAction = (projectId) => {
  document.forms['new-todo'].querySelector('#todo-title-input').value = '';
  document.forms['new-todo'].querySelector('#todo-desc-input').value = '';
  document.forms['new-todo'].querySelector('#todo-duedate-input').value = '';
  document.forms['new-todo'].querySelector('#todo-low-priority').checked = false;
  document.forms['new-todo'].querySelector('#todo-medium-priority').checked = true;
  document.forms['new-todo'].querySelector('#todo-high-priority').checked = false;
  document.forms['new-todo'].querySelector('#todo-notes-input').value = '';
  document.forms['new-todo'].querySelector('#project-input').value = projectId;
  document.forms['new-todo'].querySelector('#todo-input').value = -1;
  document.forms['new-todo'].querySelector('input[type=submit]').value = 'Create New Todo';
  document.getElementById('todo-form-box').classList.toggle('show-form');
};

const editTodoBtnAction = (todoId, projectId) => {
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
  document.forms['new-todo'].querySelector('input[type=submit]').value = 'Update Todo';
  document.getElementById('todo-form-box').classList.toggle('show-form');
};

export { addTodoBtnAction, editTodoBtnAction };
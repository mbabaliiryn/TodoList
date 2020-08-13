import titleInput from './title_section';
import descInput from './description_section';
import dueDateInput from './due_date_section';
import priorityInput from './priority_section';
import notesInput from './notes_section';
import submitButton from './submit_section';
import renderAppData from '../display_results';

const getTodoForm = (formAction) => {
  const todoForm = document.createElement('form');
  todoForm.id = 'new-todo';

  todoForm.appendChild(titleInput('todo'));

  const projectIdInput = document.createElement('input');
  projectIdInput.name = 'projectid';
  projectIdInput.type = 'hidden';
  projectIdInput.id = 'project-input';
  todoForm.appendChild(projectIdInput);

  const todoIdInput = document.createElement('input');
  todoIdInput.name = 'todoid';
  todoIdInput.type = 'hidden';
  todoIdInput.id = 'todo-input';
  todoIdInput.value = '-1';
  todoForm.appendChild(todoIdInput);

  todoForm.appendChild(descInput);
  todoForm.appendChild(dueDateInput);
  todoForm.appendChild(priorityInput);
  todoForm.appendChild(notesInput);
  todoForm.appendChild(submitButton('todo'));

  // eslint-disable-next-line no-unused-vars
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoFormInputs = {
      title: todoForm.elements.title.value,
      description: todoForm.elements.description.value,
      duedate: todoForm.elements.duedate.value,
      priority: todoForm.elements.priority.value,
      notes: todoForm.elements.notes.value,
      projectId: Number(todoForm.elements.projectid.value),
      todoId: Number(todoForm.elements.todoid.value),
      checklist: [],
    };
    formAction(todoFormInputs);
    todoForm.reset();
    const formModalBox = document.getElementById('todo-form-box');
    formModalBox.classList.toggle('show-form');
    renderAppData();
  });

  return todoForm;
};

export default getTodoForm;

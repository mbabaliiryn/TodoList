import titleInput from './title_section';
import descInput from './description_section';
import dueDateInput from './due_date_section';
import priorityInput from './priority_section';
import notesInput from './notes_section';
import submitButton from './submit_section';
import projectInput from './select_project_section';
import renderAppData from '../display_results';

const getTodoForm = (formAction) => {
  const todoForm = document.createElement('form');
  todoForm.id = 'new-todo';

  todoForm.appendChild(titleInput('todo'));
  todoForm.appendChild(projectInput);
  todoForm.appendChild(descInput);
  todoForm.appendChild(dueDateInput);
  todoForm.appendChild(priorityInput);
  todoForm.appendChild(notesInput);
  todoForm.appendChild(submitButton('todo'));

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoFormInputs = {
      title: todoForm.elements.title.value,
      description: todoForm.elements.description.value,
      duedate: todoForm.elements.duedate.value,
      priority: todoForm.elements.priority.value,
      notes: todoForm.elements.notes.value,
      projectId: Number(todoForm.elements.projectid.value),
      checklist: [],
    };
    formAction(todoFormInputs);
    todoForm.reset();
    const formModalBox = document.getElementById('add-todo-form-box');
    formModalBox.classList.toggle('show-form');
    renderAppData();
  });

  return todoForm;
};

export default getTodoForm;

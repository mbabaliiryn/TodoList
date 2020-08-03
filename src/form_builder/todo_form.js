import titleInput from './title_section';
import descInput from './description_section';
import dueDateInput from './due_date_section';
import priorityInput from './priority_section';
import notesInput from './notes_section';
import submitButton from './submit_section';

const getTodoForm = (formAction) => {
  const todoForm = document.createElement('form');
  todoForm.id = 'new-todo';

  todoForm.appendChild(titleInput);
  todoForm.appendChild(descInput);
  todoForm.appendChild(dueDateInput);
  todoForm.appendChild(priorityInput);
  todoForm.appendChild(notesInput);
  todoForm.appendChild(submitButton);

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoFormInputs = {
      title: todoForm.elements.title.value,
      description: todoForm.elements.description.value,
      duedate: todoForm.elements.duedate.value,
      priority: todoForm.elements.priority.value,
      notes: todoForm.elements.notes.value,
      checklist: [],
    };
    formAction(todoFormInputs);
    todoForm.reset();
  });

  return todoForm;
};

export default getTodoForm;

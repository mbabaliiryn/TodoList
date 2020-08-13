const createTodoTitle = (todo) => {
  const todoTitle = document.createElement('p');
  todoTitle.classList.add('todo-title');
  todoTitle.textContent = todo.getTitle();
  return todoTitle;
};

const createTodoContent = (todo) => {
  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = todo.getDescription();
  const dueDate = document.createElement('p');
  dueDate.classList.add('todo-duedate');
  dueDate.textContent = `Due on ${todo.getDueDate()}`;
  const notes = document.createElement('p');
  notes.classList.add('todo-notes');
  notes.textContent = todo.getNotes();
  const priority = document.createElement('p');
  priority.classList.add('todo-priority');
  priority.textContent = `This task has ${todo.getPriority()} priority`;

  const deleteTodoButton = document.createElement('button');
  deleteTodoButton.className = 'delete-todo-btn';
  deleteTodoButton.setAttribute('data-todoid', todo.getTodoId());
  deleteTodoButton.setAttribute('data-projectid', todo.getProjectId());
  deleteTodoButton.textContent = 'Delete Todo';
  const editTodoButton = document.createElement('button');
  editTodoButton.className = 'edit-todo-btn';
  editTodoButton.setAttribute('data-todoid', todo.getTodoId());
  editTodoButton.setAttribute('data-projectid', todo.getProjectId());
  editTodoButton.textContent = 'Edit Todo';

  todoContent.appendChild(description);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(notes);

  todoContent.appendChild(deleteTodoButton);
  todoContent.appendChild(editTodoButton);

  return todoContent;
};

const createTodoDiv = (todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoDiv.id = `project-${todo.getProjectId()}-todo-${todo.getTodoId()}`;
  todoDiv.appendChild(createTodoTitle(todo));
  todoDiv.appendChild(createTodoContent(todo));
  return todoDiv;
};

export default createTodoDiv;
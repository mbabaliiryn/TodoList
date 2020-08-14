const createTodoTitle = (todo) => {
  const todoHeader = document.createElement('div');
  todoHeader.className = 'todo-header';
  const todoTitle = document.createElement('span');
  todoTitle.classList.add('todo-title');
  todoTitle.textContent = todo.getTitle();
  todoHeader.appendChild(todoTitle);
  return todoHeader;
};

const insertLineBreaks = (container, num) => {
  for (let i = 0; i < num; i += 1) {
    container.appendChild(document.createElement('br'));
  }
};

const createTodoContent = (todo) => {
  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = todo.getDescription();
  const dueDate = document.createElement('p');
  dueDate.classList.add('todo-duedate');
  dueDate.innerHTML = `Due on <span class="date">${todo.getDueDate()}</span>`;
  const notes = document.createElement('p');
  const priority = document.createElement('p');
  priority.classList.add('todo-priority');
  priority.innerHTML = `
  This task has <span class="${todo.getPriority()}">${todo.getPriority()}</span> priority`;
  notes.classList.add('todo-notes');
  notes.textContent = todo.getNotes();

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
  const todoControls = document.createElement('div');
  todoControls.className = 'todo-controls';
  todoControls.appendChild(deleteTodoButton);
  todoControls.appendChild(editTodoButton);

  todoContent.appendChild(description);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(notes);
  todoContent.appendChild(todoControls);

  insertLineBreaks(todoContent, 2);

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
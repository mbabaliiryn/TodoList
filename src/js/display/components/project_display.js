import createTodoDiv from './todo_display';

const createProjectTitle = (project) => {
  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  const projectTitle = document.createElement('span');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.getTitle();
  projectHeader.appendChild(projectTitle);

  return projectHeader;
};

const createProjectContent = (project) => {
  const projectTodos = document.createElement('div');
  projectTodos.classList.add('project-todos', 'accordion');

  const projectControls = document.createElement('div');
  projectControls.className = 'project-controls';
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  projectControls.appendChild(buttons);
  projectControls.appendChild(document.createElement('div'));
  projectTodos.appendChild(projectControls);

  const addTodoButton = document.createElement('button');
  addTodoButton.className = 'add-todo-btn';
  addTodoButton.setAttribute('data-id', project.getId());
  addTodoButton.textContent = 'Add Todo';
  buttons.appendChild(addTodoButton);

  if (project.getId() !== 0) {
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'delete-project-btn';
    deleteProjectButton.setAttribute('data-id', project.getId());
    deleteProjectButton.textContent = 'Delete Project';
    buttons.appendChild(deleteProjectButton);
  }

  const todos = project.getTodos();
  todos.forEach(todo => {
    const todoDiv = createTodoDiv(todo);
    projectTodos.appendChild(todoDiv);
  });
  return projectTodos;
};

const createProjectDiv = (project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.id = `project-${project.getId()}`;
  projectDiv.appendChild(createProjectTitle(project));
  projectDiv.appendChild(createProjectContent(project));
  return projectDiv;
};

export default createProjectDiv;
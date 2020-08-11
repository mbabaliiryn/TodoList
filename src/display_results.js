// eslint-disable-next-line import/extensions
import Accordion from 'accordion/src/accordion.mjs';
import { getAppData } from './data';

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

  // buttons: edit and delete
  const deleteTodoButton = document.createElement('button');
  deleteTodoButton.className = 'delete-todo-btn';
  // deleteTodoButton.setAttribute('data-id', todo.getId());
  deleteTodoButton.textContent = 'Delete Todo';
  const editTodoButton = document.createElement('button');
  editTodoButton.className = 'edit-todo-btn';
  // editTodoButton.setAttribute('data-id', todo.getId());
  editTodoButton.textContent = 'Edit Todo';

  todoContent.appendChild(description);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(notes);

  // attach buttons
  todoContent.appendChild(deleteTodoButton);
  todoContent.appendChild(editTodoButton);

  return todoContent;
};

const createTodoDiv = (todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoDiv.appendChild(createTodoTitle(todo));
  todoDiv.appendChild(createTodoContent(todo));
  return todoDiv;
};

const createProjectTitle = (project) => {
  const projectHeader = document.createElement('div');
  const projectTitle = document.createElement('span');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.getTitle();
  projectHeader.appendChild(projectTitle);

  return projectHeader;
};

const createProjectContent = (project) => {
  const projectTodos = document.createElement('div');
  projectTodos.classList.add('project-todos', 'accordion');

  // delete project button
  if (project.getId() !== 0) {
    const projectControls = document.createElement('div');
    projectControls.classList.add('project-controls');
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'delete-project-btn';
    deleteProjectButton.setAttribute('data-id', project.getId());
    deleteProjectButton.textContent = 'Delete Project';
    projectControls.appendChild(deleteProjectButton);
    projectControls.appendChild(document.createElement('div'));
    projectTodos.appendChild(projectControls);
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
  projectDiv.appendChild(createProjectTitle(project));
  projectDiv.appendChild(createProjectContent(project));
  return projectDiv;
};

const createResultsSection = (projects) => {
  const listOfProjects = document.createElement('div');
  listOfProjects.id = 'project-list';
  listOfProjects.className = 'accordion';
  projects.forEach(project => {
    const projectDiv = createProjectDiv(project);
    listOfProjects.appendChild(projectDiv);
  });
  return listOfProjects;
};

const createAccordions = () => {
  const accordions = document.querySelectorAll('#project-list, .project-todos');
  for (let i = 0; i < accordions.length; i += 1) {
    // eslint-disable-next-line no-new
    new Accordion(accordions[i], {
      modal: true,
    });
  }
};

const setupBtnEventListeners = () => {
  const app = document.getElementById('project-list');
  app.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (btn) {
      switch (btn.className) {
        case 'delete-project-btn':
          console.log(`Deleting project ${btn.dataset.id} ...`);
          break;
        case 'delete-todo-btn':
          console.log('Deleting todo ...');
          break;
        case 'edit-todo-btn':
          console.log('Editting todo ...');
          break;
        default:
          break;
      }
    }
  });
};

const renderResults = () => {
  const displaySection = document.getElementById('projects-data');
  let results = document.getElementById('project-list');
  if (results !== null) {
    results.remove();
  }
  const { defaultProject, otherProjects } = getAppData();
  const allProjects = [defaultProject].concat(otherProjects);
  results = createResultsSection(allProjects);
  displaySection.appendChild(results);
  createAccordions();
  setupBtnEventListeners();
};

export default renderResults;

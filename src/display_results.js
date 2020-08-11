// eslint-disable-next-line import/extensions
import Accordion from 'accordion/src/accordion.mjs';
import { getAppData } from './data';
import { deleteProject, deleteTodo } from './methods';

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

  // attach buttons
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
  projectDiv.id = `project-${project.getId()}`;
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

const closeFold = (fold) => {
  fold.open = false;
};

const openFold = (fold) => {
  fold.open = true;
};

const deleteProjectFromUI = (projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = Accordion.getFold(projectDiv);
  const { accordion } = projectFold;
  const foldIndex = accordion.folds.findIndex(fold => fold === projectFold);
  accordion.folds.splice(foldIndex, 1);
  projectDiv.remove();
  setTimeout(closeFold, 200, projectFold);
};


const deleteTodoFromUI = (todoId, projectId) => {
  const todoDiv = document.getElementById(`project-${projectId}-todo-${todoId}`);
  const todoFold = Accordion.getFold(todoDiv);
  const { accordion } = todoFold;
  const { parentFold } = accordion;
  setTimeout(closeFold, 200, todoFold);
  const foldIndex = accordion.folds.findIndex(fold => fold === todoFold);
  accordion.folds.splice(foldIndex, 1);
  todoDiv.remove();
  setTimeout(closeFold, 400, parentFold);
  setTimeout(openFold, 600, parentFold);
};

const setupBtnEventListeners = () => {
  const app = document.getElementById('project-list');
  app.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (btn) {
      switch (btn.className) {
        case 'delete-project-btn':
          deleteProject(Number(btn.dataset.id));
          deleteProjectFromUI(btn.dataset.id, btn);
          break;
        case 'delete-todo-btn':
          deleteTodo(Number(btn.dataset.todoid), Number(btn.dataset.projectid));
          deleteTodoFromUI(btn.dataset.todoid, btn.dataset.projectid);
          break;
        case 'edit-todo-btn':
          console.log(`Editing todo tid: ${btn.dataset.todoid} pid: ${btn.dataset.projectid} ...`);
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

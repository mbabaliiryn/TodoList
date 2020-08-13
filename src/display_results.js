// eslint-disable-next-line import/extensions
import Accordion from 'accordion/src/accordion.mjs';
import { createAccordions, closeFold, openFold } from './accordion_utils';
import { getAppData } from './data';
import { deleteProject, deleteTodo } from './methods';
import { addTodoBtnAction, editTodoBtnAction } from './button_action';
import createProjectDiv from './project_display';

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
          deleteProjectFromUI(btn.dataset.id);
          break;
        case 'delete-todo-btn':
          deleteTodo(Number(btn.dataset.todoid), Number(btn.dataset.projectid));
          deleteTodoFromUI(btn.dataset.todoid, btn.dataset.projectid);
          break;
        case 'add-todo-btn':
          addTodoBtnAction(Number(btn.dataset.id));
          break;
        case 'edit-todo-btn':
          editTodoBtnAction(Number(btn.dataset.todoid), Number(btn.dataset.projectid));
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

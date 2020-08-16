import { createAccordions } from './accordion_utils';
import { getAppData, deleteProject, deleteTodo } from '../models/data';
import { addTodoBtnAction, editTodoBtnAction } from './button_action';
import createProjectDiv from './components/project_display';
import { deleteProjectFromUI, deleteTodoFromUI } from './change_dom';

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

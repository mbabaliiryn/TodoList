// eslint-disable-next-line import/extensions
import Accordion from 'accordion/src/accordion.mjs';
import { closeFold, openFold } from './accordion_utils';

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

const openProjectTab = (projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = Accordion.getFold(projectDiv);
  setTimeout(openFold, 200, projectFold);
};

const openTodoTab = (todoId, projectId) => {
  const projectDiv = document.getElementById(`project-${projectId}`);
  const projectFold = Accordion.getFold(projectDiv);
  const todoDiv = document.getElementById(`project-${projectId}-todo-${todoId}`);
  const todoFold = Accordion.getFold(todoDiv);
  setTimeout(openFold, 150, projectFold);
  setTimeout(openFold, 300, todoFold);
};

export {
  deleteProjectFromUI,
  deleteTodoFromUI,
  openProjectTab,
  openTodoTab,
};
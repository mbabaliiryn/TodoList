import todoFactory from './todo_factory';
import { newProjectInstance } from './project_factory';
import { getAppData, storeAppData } from './data';

const nextTodoId = (project) => {
  const todos = project.getTodos();
  const numTodos = todos.length;
  const todoId = numTodos === 0 ? 0 : todos[numTodos - 1].getTodoId() + 1;
  return todoId;
};

const nextProjectId = (projectList) => {
  const numProjects = projectList.length;
  const projectId = numProjects === 0 ? 1 : projectList[numProjects - 1].getId() + 1;
  return projectId;
};

const addNewTodoToProject = ({
  title,
  description,
  duedate,
  priority,
  notes,
  projectId,
  checklist,
}) => {
  const projectLibrary = getAppData();
  const { defaultProject, otherProjects } = projectLibrary;
  let project;
  if (projectId === 0) {
    project = defaultProject;
  } else {
    project = otherProjects.find(project => project.getId() === projectId);
  }
  const todoId = nextTodoId(project);
  const newTodo = todoFactory(
    title,
    description,
    duedate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  );
  project.addTodo(newTodo);
  storeAppData(projectLibrary);
};

const createNewProject = ({
  title,
}) => {
  const projects = getAppData();
  const projectId = nextProjectId(projects.otherProjects);
  const project = newProjectInstance(title, projectId);
  projects.otherProjects.push(project);
  storeAppData(projects);
};

const deleteProject = (projectId) => {
  if (projectId !== 0) {
    const { defaultProject, otherProjects } = getAppData();
    const projectIndex = otherProjects.findIndex(project => project.getId() === projectId);
    otherProjects.splice(projectIndex, 1);
    storeAppData({ defaultProject, otherProjects });
  }
};

const deleteTodo = (todoId, projectId) => {
  const { defaultProject, otherProjects } = getAppData();
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  const todos = project.getTodos();
  const todoIndex = todos.findIndex(todo => todo.getTodoId() === todoId);
  todos.splice(todoIndex, 1);
  storeAppData({ defaultProject, otherProjects });
};

const updateTodo = () => {

};

export {
  addNewTodoToProject,
  createNewProject,
  deleteProject,
  deleteTodo,
};

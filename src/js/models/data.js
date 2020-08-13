import { newProjectInstance, projectFromJSON } from './project_factory';

const storeAppData = ({ defaultProject, otherProjects }) => {
  const JSONifiedData = {};
  JSONifiedData.defaultProject = defaultProject.toJSON();
  JSONifiedData.otherProjects = otherProjects.map(project => project.toJSON());
  localStorage.setItem('projects', JSON.stringify(JSONifiedData));
};


const getAppData = () => {
  const defaultProjectLibrary = {
    defaultProject: newProjectInstance('Miscellaneous Tasks', 0),
    otherProjects: [],
  };
  const JSONifiedData = JSON.parse(localStorage.getItem('projects'));
  let data;
  if (!JSONifiedData) {
    data = defaultProjectLibrary;
  } else {
    data = {};
    const { defaultProject, otherProjects } = JSONifiedData;
    data.defaultProject = projectFromJSON(defaultProject);
    data.otherProjects = otherProjects.map(JSONifiedProject => projectFromJSON(JSONifiedProject));
  }
  return data;
};

const getTodo = (todoId, projectId) => {
  const { defaultProject, otherProjects } = getAppData();
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  const todos = project.getTodos();
  const todoToUpdate = todos.find(todo => todo.getTodoId() === todoId);
  return todoToUpdate;
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

export {
  getAppData,
  storeAppData,
  getTodo,
  deleteProject,
  deleteTodo,
};

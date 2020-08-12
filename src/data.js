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

export { getAppData, storeAppData, getTodo };

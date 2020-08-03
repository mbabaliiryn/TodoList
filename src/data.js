import newProjectInstance from './project_factory';

const storeAppData = (appData) => {
  localStorage.setItem('projects', JSON.stringify(appData));
};

const projectLibrary = {
  defaultProject: newProjectInstance('Miscellaneous Tasks', 0),
  otherProjects: [],
};

const getAppData = () => JSON.parse(localStorage.getItem('projects')) || projectLibrary;

export { getAppData, storeAppData };
import todoFactory from './todo_factory';
import { newProjectInstance } from './project_factory';
import { getAppData, storeAppData } from './data';

const addNewTodoToProject = ({
  title,
  description,
  duedate,
  priority,
  notes,
  projectId,
  checklist,
}) => {
  const newTodo = todoFactory(
    title,
    description,
    duedate,
    priority,
    notes,
    projectId,
    checklist,
  );
  const projectLibrary = getAppData();
  const { defaultProject, otherProjects } = projectLibrary;
  let project;
  if (projectId === 0) {
    project = defaultProject;
  } else {
    project = otherProjects.find(project => project.getId() === projectId);
  }
  project.addTodo(newTodo);
  storeAppData(projectLibrary);
};

const createNewProject = ({
  title,
}) => {
  const projects = getAppData();
  const projectId = projects.otherProjects.length + 1;
  const project = newProjectInstance(title, projectId);
  projects.otherProjects.push(project);
  storeAppData(projects);
};

export { addNewTodoToProject, createNewProject };

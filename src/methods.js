import todoFactory from './todo_factory';
import { getAppData, storeAppData } from './data';
import renderAppData from './display_results';

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
  renderAppData();
};

export default addNewTodoToProject;
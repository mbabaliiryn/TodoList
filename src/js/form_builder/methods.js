import todoFactory from '../models/todo_factory';
import { newProjectInstance } from '../models/project_factory';
import { getAppData, storeAppData } from '../models/data';

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
  todoId,
  checklist,
}) => {
  let todo;
  const projectLibrary = getAppData();
  const { defaultProject, otherProjects } = projectLibrary;
  const project = projectId === 0
    ? defaultProject
    : otherProjects.find(project => project.getId() === projectId);
  if (todoId === -1) {
    todoId = nextTodoId(project);
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
    todo = newTodo;
  } else {
    const todos = project.getTodos();
    const todoToUpdate = todos.find(todo => todo.getTodoId() === todoId);
    const newTitle = title;
    const newDescription = description;
    const newDueDate = duedate;
    const newPriority = priority;
    const newNotes = notes;
    const newChecklist = checklist;
    todoToUpdate.update({
      newTitle,
      newDescription,
      newDueDate,
      newPriority,
      newNotes,
      newChecklist,
    });
    todo = todoToUpdate;
  }
  storeAppData(projectLibrary);
  return todo;
};

const createNewProject = ({
  title,
}) => {
  const projects = getAppData();
  const projectId = nextProjectId(projects.otherProjects);
  const project = newProjectInstance(title, projectId);
  projects.otherProjects.push(project);
  storeAppData(projects);
  return project;
};

export {
  addNewTodoToProject,
  createNewProject,
};

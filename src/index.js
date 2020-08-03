import './style.css';
import todoFactory from './todo_factory';
import projectFactory from './project_factory';
import getNewTodoForm from './form_builder/todo_form';
import getResults from './display_results';

const contentTag = document.getElementById('content');
const h1 = document.createElement('h1');
h1.textContent = 'ToDo List App';
contentTag.appendChild(h1);

const projects = [];
const defaultProject = projectFactory();
projects.push(defaultProject);

// allow switching between project (const -> let)
const currentProject = defaultProject;

// Temporary to display added todos and projects
const displaySection = document.createElement('section');
const heading = document.createElement('h3');
heading.textContent = 'Projects and Todos';
displaySection.appendChild(heading);

const renderResults = () => {
  let resultsSection = document.getElementById('results');
  if (resultsSection !== null) {
    resultsSection.remove();
  }
  resultsSection = getResults(projects);
  displaySection.appendChild(resultsSection);
};

const addNewTodoToProject = ({
  title,
  description,
  duedate,
  priority,
  notes,
  checklist,
}, project = currentProject) => {
  const newTodo = todoFactory(title, description, duedate, priority, notes, checklist);
  project.addTodo(newTodo);
  renderResults();
};

const formSection = document.createElement('section');
formSection.id = 'form-section';
const todoForm = getNewTodoForm(addNewTodoToProject);
formSection.appendChild(todoForm);

contentTag.appendChild(formSection);
contentTag.appendChild(displaySection);

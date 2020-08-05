import { getAppData } from './data';

/*
  temporary method to display lists of projects and todos
*/
const createResultsSection = (projects) => {
  const listOfProjects = document.createElement('ul');
  listOfProjects.id = 'results';
  projects.forEach(project => {
    const pItem = document.createElement('li');
    listOfProjects.appendChild(pItem);
    const pTitle = document.createElement('p');
    pTitle.textContent = project.getTitle();
    pItem.appendChild(pTitle);
    const listOfTodos = document.createElement('ul');
    pItem.appendChild(listOfTodos);
    project.getTodos().forEach(todo => {
      const todoDetails = document.createElement('li');
      const todoTitle = document.createElement('p');
      todoTitle.classList.add('todo-title');
      todoTitle.textContent = todo.getTitle();
      todoDetails.appendChild(todoTitle);
      const todoDescription = document.createElement('p');
      todoDescription.classList.add('todo-description');
      todoDescription.textContent = todo.getDescription();
      todoDetails.appendChild(todoDescription);
      const todoDueDate = document.createElement('p');
      todoDueDate.classList.add('todo-duedate');
      todoDueDate.textContent = todo.getDueDate();
      todoDetails.appendChild(todoDueDate);
      const todoPriority = document.createElement('p');
      todoPriority.classList.add('todo-priority');
      todoPriority.textContent = todo.getPriority();
      todoDetails.appendChild(todoPriority);
      const todoNotes = document.createElement('p');
      todoNotes.classList.add('todo-notes');
      todoNotes.textContent = todo.getNotes();
      todoDetails.appendChild(todoNotes);
      listOfTodos.appendChild(todoDetails);
    });
  });
  return listOfProjects;
};

const renderResults = () => {
  const displaySection = document.getElementById('projects-data');
  let results = document.getElementById('results');
  if (results !== null) {
    results.remove();
  }
  const { defaultProject, otherProjects } = getAppData();
  const allProjects = [defaultProject].concat(otherProjects);
  results = createResultsSection(allProjects);
  displaySection.appendChild(results);
};

export default renderResults;

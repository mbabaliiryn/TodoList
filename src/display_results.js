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
      todoDetails.textContent = JSON.stringify(todo.getAttributes());
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

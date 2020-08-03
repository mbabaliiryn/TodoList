/*
  temporary method to display lists of projects and todos
*/
const getResultsSection = (projects) => {
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

export default getResultsSection;

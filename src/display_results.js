const getResultsSection = (projects) => {
  const listOfProjects = document.createElement('ul');
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


// const projectsTag = document.createElement('ul');
// projects.forEach


export default getResultsSection;
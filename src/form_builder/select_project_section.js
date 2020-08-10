import { getAppData } from '../data';


const { defaultProject, otherProjects } = getAppData();

const projectSection = document.createElement('section');

const projectLabel = document.createElement('label');
projectLabel.htmlFor = 'project-input';
projectLabel.textContent = 'Project:';
projectSection.appendChild(projectLabel);

const projectInput = document.createElement('select');
projectInput.id = projectLabel.htmlFor;
projectInput.name = 'projectid';

const defaultOption = document.createElement('option');
defaultOption.value = defaultProject.getId();
defaultOption.textContent = defaultProject.getTitle();
defaultOption.selected = true;
projectInput.appendChild(defaultOption);

otherProjects.forEach(project => {
  const option = document.createElement('option');
  option.value = project.getId();
  option.textContent = project.getTitle();
  projectInput.appendChild(option);
});

projectSection.appendChild(projectInput);

export default projectSection;

/* eslint-disable no-unused-vars */
import titleInput from '../components/title_section';
import submitButton from '../components/submit_section';
import renderAppData from '../../display/display_results';
import { openProjectTab } from '../../display/change_dom';

const getProjectForm = (formAction) => {
  const projectForm = document.createElement('form');
  projectForm.id = 'new-project';

  projectForm.appendChild(titleInput('project'));
  projectForm.appendChild(submitButton('project'));

  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectFormInputs = {
      title: projectForm.elements.title.value,
    };
    const project = formAction(projectFormInputs);
    projectForm.reset();
    const formModalBox = document.getElementById('project-form-box');
    formModalBox.classList.toggle('show-form');
    renderAppData();
    openProjectTab(project.getId());
  });

  return projectForm;
};

export default getProjectForm;
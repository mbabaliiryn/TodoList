/* eslint-disable no-unused-vars */
import titleInput from './title_section';
import submitButton from './submit_section';
import renderAppData from '../display_results';

// const validateForm = () => {
//   const projectFormInputs = document.forms['new-project'].title.value;
//   if (projectFormInputs === '') {
//     alert('Title can not be empty');
//     return false;
//   }
//   return projectFormInputs;
// };

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
    // validateForm();
    formAction(projectFormInputs);
    projectForm.reset();
    const formModalBox = document.getElementById('project-form-box');
    formModalBox.classList.toggle('show-form');
    renderAppData();
  });

  return projectForm;
};

export default getProjectForm;
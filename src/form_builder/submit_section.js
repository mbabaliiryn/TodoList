const getSubmitSection = (formFor) => {
  const submitSection = document.createElement('section');
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = `Create ${formFor.charAt(0).toUpperCase().concat(formFor.slice(1))}`;
  submitSection.appendChild(submitButton);
  return submitSection;
};

export default getSubmitSection;
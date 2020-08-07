const getAddButton = (projectId) => {
  const addButton = document.createElement('button');
  addButton.classList.add('add-btn');
  const formModal = document.createElement('div');
  formModal.classList.add('modal');
  
  return { addButton, formModal };
};

export default getAddButton;

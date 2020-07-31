const titleSection = document.createElement('section');
const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'todo-title-input';
titleLabel.textContent = 'Title';
const titleInput = document.createElement('input');
titleInput.id = 'todo-title-input';
titleInput.type = 'text';
titleInput.name = 'title';
titleSection.appendChild(titleLabel);
titleSection.appendChild(titleInput);

export default titleSection;
const descSection = document.createElement('section');
const descLabel = document.createElement('label');
descLabel.htmlFor = 'todo-desc-input';
descLabel.textContent = 'Description';
const descInput = document.createElement('input');
descInput.id = 'todo-desc-input';
descInput.type = 'text';
descInput.name = 'description';
descSection.appendChild(descLabel);
descSection.appendChild(document.createElement('br'));
descSection.appendChild(descInput);

export default descSection;
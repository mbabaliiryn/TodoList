const dueDateSection = document.createElement('section');
const dueDateLabel = document.createElement('label');
dueDateLabel.htmlFor = 'todo-duedate-input';
dueDateLabel.textContent = 'Due Date';
const dueDateInput = document.createElement('input');
dueDateInput.id = 'todo-duedate-input';
dueDateInput.type = 'date';
dueDateInput.name = 'duedate';
dueDateSection.appendChild(dueDateLabel);
dueDateSection.appendChild(document.createElement('br'));
dueDateSection.appendChild(dueDateInput);

export default dueDateSection;
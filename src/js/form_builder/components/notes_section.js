const notesSection = document.createElement('section');
const notesLabel = document.createElement('label');
notesLabel.htmlFor = 'todo-notes-input';
notesLabel.textContent = 'Notes';
const notesInput = document.createElement('textarea');
notesInput.id = 'todo-notes-input';
notesInput.name = 'notes';
notesInput.rows = '5';
notesInput.cols = '33';
notesInput.placeholder = 'Enter points of note for this todo...';
notesSection.appendChild(notesLabel);
notesSection.appendChild(document.createElement('br'));
notesSection.appendChild(notesInput);

export default notesSection;
const prioritySection = document.createElement('fieldset');
const priorityLegend = document.createElement('legend');
priorityLegend.textContent = 'Todo Priority';
prioritySection.appendChild(priorityLegend);
const priorityListValues = ['low', 'medium', 'high'];
priorityListValues.forEach((pVal) => {
  const priorityInput = document.createElement('input');
  priorityInput.type = 'radio';
  priorityInput.id = `todo-${pVal}-priority`;
  priorityInput.name = 'priority';
  priorityInput.value = pVal;
  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = priorityInput.id;
  priorityLabel.textContent = pVal;
  prioritySection.appendChild(priorityInput);
  prioritySection.appendChild(priorityLabel);
});

export default prioritySection;
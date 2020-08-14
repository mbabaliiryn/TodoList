const getTitleSection = (formFor) => {
  const titleSection = document.createElement('section');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = `${formFor}-title-input`;
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.id = titleLabel.htmlFor;
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleSection.appendChild(titleLabel);
  titleSection.appendChild(document.createElement('br'));
  titleSection.appendChild(titleInput);
  return titleSection;
};

export default getTitleSection;
const newTodoInstance = (
  title,
  description,
  dueDate,
  priority,
  notes,
  projectId,
  checklist,
) => {
  const getTitle = () => title;
  const getAttributes = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    checklist,
  });

  return {
    getAttributes,
    getTitle,
  };
};

export default newTodoInstance;
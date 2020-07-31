const newTodoInstance = (title, description, dueDate, priority, notes, checklist) => {
  const getTitle = () => title;
  const getAttributes = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  });

  return {
    getAttributes,
    getTitle,
  };
};

export default newTodoInstance;
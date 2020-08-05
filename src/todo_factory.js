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
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNotes = () => notes;
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
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
  };
};

export default newTodoInstance;
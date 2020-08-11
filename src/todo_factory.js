const newTodoInstance = (
  title,
  description,
  dueDate,
  priority,
  notes,
  projectId,
  todoId,
  checklist,
) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNotes = () => notes;
  const getProjectId = () => projectId;
  const getTodoId = () => todoId;
  const getAttributes = () => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  });

  return {
    getAttributes,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
    getProjectId,
    getTodoId,
  };
};

export default newTodoInstance;
const newTodoInstance = (title, description, dueDate, priority, notes, checklist) => {

  const getTitle = () => title;

  return {
    getTitle,
  };
};

export default newTodoInstance;
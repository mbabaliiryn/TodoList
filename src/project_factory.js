const newProjectInstance = (todos) => {
  todos = todos || [];

  const addTodo = (todoInstance) => {
    todos.push(todoInstance);
  };

  const getTodoTitles = () => {
    const titles = [];
    todos.forEach(todo => {
      titles.push(todo.title);
    });
    return titles;
  };

  return {
    addTodo,
    getTodoTitles,
  };
};

export default newProjectInstance;
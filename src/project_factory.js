const newProjectInstance = (title, projectId, todos) => {
  todos = todos || [];

  const addTodo = (todoInstance) => {
    todos.push(todoInstance);
  };

  const getTitle = () => title;
  const getId = () => projectId;
  const getTodos = () => todos;

  const getTodoTitles = () => {
    const titles = [];
    todos.forEach(todo => {
      titles.push(todo.title);
    });
    return titles;
  };

  return {
    getTitle,
    getId,
    getTodos,
    addTodo,
    getTodoTitles,
  };
};

export default newProjectInstance;
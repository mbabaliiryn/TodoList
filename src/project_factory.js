const newProjectInstance = (title = 'Miscellaneous Todos', todos) => {
  todos = todos || [];

  const addTodo = (todoInstance) => {
    todos.push(todoInstance);
  };

  const getTitle = () => title;
  const getTodos = () => todos;

  const getTodoTitles = () => {
    const titles = [];
    todos.forEach(todo => {
      titles.push(todo.title);
    });
    return titles;
  };

  return {
    getTodos,
    getTitle,
    addTodo,
    getTodoTitles,
  };
};

export default newProjectInstance;
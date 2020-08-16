import todoFactory from './todo_factory';

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

  const toJSON = () => ({
    title: getTitle(),
    id: getId(),
    todos: todos.map(todo => todo.getAttributes()),
  });

  return {
    getTitle,
    getId,
    getTodos,
    addTodo,
    getTodoTitles,
    toJSON,
  };
};

const projectFromJSON = (({ title, id, todos }) => {
  const todoInstances = todos.map(({
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  }) => todoFactory(
    title,
    description,
    dueDate,
    priority,
    notes,
    projectId,
    todoId,
    checklist,
  ));
  return newProjectInstance(title, id, todoInstances);
});

export { newProjectInstance, projectFromJSON };

const newProjectInstance = (todo_array) => {

  const printItems = () => {
    todo_array.forEach(todo => {
      console.log(todo.getTitle());
    });
  };

  return {
    printItems,
  };
};

export default newProjectInstance;
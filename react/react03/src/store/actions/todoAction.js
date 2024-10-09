export const addTodo = (todo) => {
  return {
    type: "todoList/add",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "todoList/delete",
    payload: id,
  };
};

export const checkTodo = (id) => {
  return {
    type: "todoList/checked",
    payload: id,
  };
};

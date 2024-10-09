export const inittialState = {
  count: 0,
  todoList: [],
  postList: [],
  auth: {
    user: {},
    isLoading: true,
  },
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "count/increase":
      return { ...state, count: state.count + 1 };
    case "count/decrease":
      return { ...state, count: state.count - 1 };
    case "todoList/checked":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload
            ? { ...item, isFinished: !item.isFinished }
            : { ...item }
        ),
      };
    case "todoList/delete":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case "todoList/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "postList/update":
      return { ...state, postList: action.payload };
    case "auth/setUser":
      return { ...state, auth: { ...state.auth, user: action.payload } };
    case "auth/setLoading": {
      return { ...state, auth: { ...state.auth, isLoading: false } };
    }
    default:
      return state;
  }
};

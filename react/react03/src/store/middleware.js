export const middleware = (store) => {
  return (action) => {
    // Trong tham số store có 2 hàm:
    // - getState() --> Trả về toàn bộ state của store
    // - dispatch() --> Thực thi dispatch lên reducer
    // if (action.type === "todoList/add") {
    //   store.dispatch({
    //     type: "count/increase",
    //   });
    // }
    // if (action.type === "todoList/delete") {
    //   store.dispatch({
    //     type: "count/decrease",
    //   });
    // }
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    }
  };
};

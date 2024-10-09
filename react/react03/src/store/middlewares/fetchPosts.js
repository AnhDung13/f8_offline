export const fetchPosts = () => {
  return async (dispatch, getState) => {
    //Call Api
    //Khi nào có dữ liệu trả về --> dispatch để cập nhập state
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({
      type: "postList/update",
      payload: data,
    });
  };
};

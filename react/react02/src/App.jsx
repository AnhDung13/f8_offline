import React, { useReducer, useState } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "counter/increase":
      return { ...prevState, count: prevState.count + 1 };
    default:
      return prevState;
  }
};

export default function App() {
  // const [count, setCount] = useState(0);
  /*
  State sẽ có dạng như sau:
  {
    count: 0,
    todolist:[],
    user:{}
  }
  
  Action sẽ có dạng như sau:
  {
    type:'TEN_HANH_DONG',
    payload:'du lieu can gui len'
  }
  */
  const initialState = {
    count: 0,
    todolist: [],
    user: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = () => {
    dispatch({ type: "counter/increase" });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

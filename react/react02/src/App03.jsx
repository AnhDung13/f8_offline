import React, { useReducer, useState } from "react";

const reduce = (state, action) => {
  if (action === "INCREASE") {
    return { ...state, age: state.age + 1 };
  } else if (action === "DECREASE") {
    return { ...state, age: state.age - 1 };
  }

  return state;
};

export default function App() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reduce, {
    age: 42,
  });
  const cReduce = (cState, cAction) => {
    if (cAction.type === "SET_TODO") {
      return { ...cState, todo: cAction.payload };
    } else if (cAction.type === "ADD_TODO") {
      return {
        ...cState,
        todoList: [...cState.todoList, cState.todo],
        todo: "",
      };
    }
    return cState;
  };
  const [cState, cDispatch] = useReducer(cReduce, {
    todo: "",
    todoList: ["HomeWork"],
  });
  return (
    <>
      <h1>{state.age}</h1>
      <button onClick={() => dispatch("DECREASE")}>DECREASE</button>
      <button onClick={() => dispatch("INCREASE")}>INCREASE</button>
      <hr />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          cDispatch({ type: "ADD_TODO" });
        }}
      >
        <input
          type="text"
          value={cState.todo}
          onChange={(e) => {
            cDispatch({ type: "SET_TODO", payload: e.target.value });
          }}
        />
        <button>Add Todo</button>
      </form>
      <h2>Todo List</h2>
      <ul>
        {cState.todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

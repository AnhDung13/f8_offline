import React from "react";
import Todo from "./components/Todos/Todo";
import { useSelector } from "./store/hook";
function App() {
  const count = useSelector((state) => state.count);
  return (
    <>
      <Todo />
      <h2>Count {count}</h2>
    </>
  );
}

export default App;

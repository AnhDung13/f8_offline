import React from "react";
import { useProviderContext } from "../store/Provider";

export default function Counter() {
  const { state, dispatch } = useProviderContext();
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "count/decrease" })}>
        decrease
      </button>
      <button onClick={() => dispatch({ type: "count/increase" })}>
        increase
      </button>
    </div>
  );
}

// Làm thế nào để trong component đọc được state tử Provider

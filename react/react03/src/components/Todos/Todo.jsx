import React from "react";
import TodoList from "./TodoList";
import TodoApp from "./TodoApp";

export default function Todo() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoApp />
      <TodoList />
    </div>
  );
}

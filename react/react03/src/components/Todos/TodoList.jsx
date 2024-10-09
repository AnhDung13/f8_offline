import React from "react";
import { useDispatch, useSelector } from "../../store/hook";
import { checkTodo, deleteTodo } from "../../store/actions/todoAction";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  const handleDelete = (id) => {
    const question = confirm("Có chắc chắn xóa");
    if (!question) {
      return;
    }
    dispatch(deleteTodo(id));
  };
  return (
    <ul>
      {todoList.map(({ id, name, isFinished }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={isFinished}
            onChange={() => handleCheck(id)}
          />
          <span
            style={
              isFinished
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {name}
          </span>
          <button onClick={() => handleDelete(id)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}

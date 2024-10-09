import React, { useState } from "react";
import { useDispatch } from "../../store/hook";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../store/actions/todoAction";

export default function TodoApp() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Vui lòng nhập tên");
    }
    const todo = {
      id: uuid(),
      name,
      isFinished: false,
    };
    dispatch(addTodo(todo));
    setName("");
  };
  return (
    <div>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

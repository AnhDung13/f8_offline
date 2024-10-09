import React, { useRef, useState } from "react";
import Input from "./Components/Input";

export default function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const handleSetValue = () => {
    inputRef.current.value = "Ahihihi";
  };
  const handleGetValue = () => {
    setValue(inputRef.current.value);
  };
  const handleChangePlaceholder = () => {
    inputRef.current.placeholder = "ok chưa";
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleGetValue}>Get Value</button>
      <button onClick={handleChangePlaceholder}>Change Placeholder</button>
      <div>Value: {value}</div>
    </div>
  );
}

// useImperativeHandle

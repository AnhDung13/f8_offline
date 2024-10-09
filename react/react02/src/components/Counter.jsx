import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  //   const [count, setCount] = useState(0);
  //   const myRef = useRef(0);
  //   const handleClick = () => {
  //     setCount(count + 1);
  //     myRef.current++;
  //   };
  const inputRef = useRef();
  const btnRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.placeholder = "oke";
    console.log(btnRef);
  }, []);
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h2>Count: {myRef.current}</h2>
      <button onClick={handleClick}>Click me</button> */}
      <input ref={inputRef} type="text" placeholder="Enter Your Name" />
      <Button ref={btnRef} />
    </div>
  );
}

import React, { useCallback, useState } from "react";
import Reset from "./Reset";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  console.log("counter render");
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = useCallback(() => {
    setCount((count) => {
      setPrevCount(count);
      return 0;
    });
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <hr />
      <Reset onClick={handleReset} />
      <div>{prevCount}</div>
    </div>
  );
}

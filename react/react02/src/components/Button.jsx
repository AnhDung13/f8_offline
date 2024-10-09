import React from "react";
import { forwardRef } from "react";
function Button(props, ref) {
  return <button ref={ref}>Click me</button>;
}

//higher order component

export default forwardRef(Button);

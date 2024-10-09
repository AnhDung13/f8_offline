import React, { useContext } from "react";
import { AppContext } from "../App02";

export default function Content() {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>{context.msg}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio corporis
        eligendi tempora incidunt accusamus cumque pariatur deserunt sit laborum
        mollitia voluptatem omnis quas perspiciatis reiciendis beatae ducimus
        necessitatibus, repudiandae dignissimos.
      </p>
      <button onClick={context.onClick}>Click me</button>
    </div>
  );
}

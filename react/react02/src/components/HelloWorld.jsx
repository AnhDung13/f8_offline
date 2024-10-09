import React from "react";
import PropTypes from "prop-types";
export default function HelloWorld({ name, age }) {
  console.log(name);
  console.log(age);

  return <div>HelloWorld</div>;
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

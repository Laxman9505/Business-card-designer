import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input
      {...props}
      placeholder={props.placeholder}
      type={props.type}
      className="input"
    />
  );
};

export default Input;

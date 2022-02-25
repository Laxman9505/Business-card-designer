import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
      className="button"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
      {props.text}
    </button>
  );
};

export default Button;

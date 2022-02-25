import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Text.css";

const Text = (props) => {
  const [textValue, setTextValue] = useState("");
  const onChangeHandler = (e) => {
    setTextValue(e.target.value);
  };
  const submitHandler = () => {
    props.getText(textValue);
    setTextValue("");
  };

  return (
    <div className="text-container">
      <h1 className="text-header">Text</h1>
      <p className="text-subtitle">
        Edit your text below, or click on the field you'd like to edit directly
        on your design.
      </p>
      <Input
        placeholder="Your Text Here"
        value={textValue}
        onChange={(e) => onChangeHandler(e)}
      />
      <Button text="Add" onClick={submitHandler} />
    </div>
  );
};

export default Text;

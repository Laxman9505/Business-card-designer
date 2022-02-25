import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Text.css";

import { SketchPicker } from "react-color";
const EditTexts = (props) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFontSize, setSelectedFontSize] = useState();
  useEffect(() => {
    if (props.editingText == "title") {
      setSelectedFontSize(16);
      setSelectedColor("red");
    }
    if (props.editingText == "subtitle") {
      setSelectedFontSize(16);
    }
    if (props.editingText == "text-area") {
    }
    if (props.editingText == "call") {
      setSelectedFontSize(16);
    }
  }, [props.editingText]);

  useEffect(() => {
    if (props.editingText === "title") {
      props.getSelectedFontSizeForHeader(selectedFontSize);
    }
    if (props.editingText === "subtitle") {
      props.getSelectedFontSizeForSubTitle(selectedFontSize);
    }
    if (props.editingText === "text-area") {
      props.getSelectedFontSizeForTextArea(selectedFontSize);
    }
    if (props.editingText === "call") {
      props.getSelectedFontSizeForCall(selectedFontSize);
    }
  }, [selectedFontSize]);
  const onChange = (color) => {
    if (props.editingText === "title") {
      props.getSelectedColorForHeader(color.hex);
    }
    if (props.editingText === "subtitle") {
      props.getSelectedColorForSubtitle(color.hex);
    }
    if (props.editingText === "text-area") {
      props.getSelectedColorForTextArea(color.hex);
    }
    if (props.editingText === "call") {
      props.getSelectedColorForCall(color.hex);
    }
  };

  return (
    <div className="active-container">
      <div className="text-container">
        <h1 className="text-header">Edit Your Text</h1>
        <p className="text-subtitle">Choose Color:</p>
        <SketchPicker onChange={(value) => onChange(value)} />
        <p className="text-subtitle">Font-Size:</p>
        <div className="increment-decrement-container">
          <div>
            <AiOutlineMinus
              className="icon"
              onClick={() => {
                setSelectedFontSize((prev) => prev - 1);
              }}
            />
          </div>
          <div className="number">{selectedFontSize}</div>
          <div>
            <AiOutlinePlus
              className="icon"
              onClick={() => {
                setSelectedFontSize((prev) => prev + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTexts;

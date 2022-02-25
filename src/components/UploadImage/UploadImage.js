import React from "react";
import Button from "../Button/Button";

const UploadImage = (props) => {
  const imageChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      props.getImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="text-container">
      <h1 className="text-header">Images</h1>
      <p>Insert Your logo or any kind of images</p>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1.7rem",
          zIndex: "1",
          cursor: "pointer",
          width: "70%",
          opacity: 0,
        }}
        onChange={(e) => imageChangeHandler(e)}
      />

      <Button text="Upload Image"></Button>
    </div>
  );
};

export default UploadImage;

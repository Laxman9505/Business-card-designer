import React, { useEffect, useRef, useState } from "react";
import "./BusinessCardEdit.css";
import Button from "../../components/Button/Button";
import { IoIosText } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { BiShapeSquare } from "react-icons/bi";
import { RiBarcodeBoxFill } from "react-icons/ri";
import { AiOutlineTable } from "react-icons/ai";
import templateImage from "../../images/Asset 1.png";
import templateImage2 from "../../images/business card_front bg-03.svg";
import front from "../../images/front with bleed.png";
import back from "../../images/back with bleed.png";
import logoImage from "../../images/Asset 2.png";
import websiteImage from "../../images/website.svg";
import homeLogo from "../../images/home.svg";
import emailLogo from "../../images/email.svg";
/* import { EditText, EditTextarea } from "react-edit-text"; */
import "react-edit-text/dist/index.css";
import Draggable from "react-draggable";
import OutsideAlerter from "../../components/OutSideAlerter";
import Text from "../../components/Text/Text";
import EditTexts from "../../components/Text/EditText";
import UploadImage from "../../components/UploadImage/UploadImage";
import { Resizable } from "re-resizable";
import data from "../../data.json";

import { EditTextarea, EditText } from "react-edit-text";
import Pdf from "react-to-pdf";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { BiSend } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const BusinessCardEdit = () => {
  const ref = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [state, setState] = useState({ width: 320, height: 50 });
  // const [userText, setUserText] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [active, setActive] = useState("text");
  const [title, setTitle] = useState(
    "Suite 503, 22 Market Street, Sydney NSW 2000"
  );
  const [subtitle, setSubtitle] = useState(
    "info@hospitalityservicesaustralia.com.au"
  );
  const [textArea, setTextArea] = useState(
    "www.hospitalityservicesaustralia.com.au"
  );
  const [call, setCall] = useState("0424 488 476");
  const [editMode, setIsEditMode] = useState(false);
  const [defaultHeaderFontSize, setDefaultHeaderFontSize] = useState(
    data.heading.typography.fontSize
  );
  const [defaultSubTitleFontSize, setDefaultSubTitleFontSize] = useState(
    data.subtitle.typography.fontSize
  );
  const [defaultTextAreaFontSize, setDefaultTextAreaFontSize] = useState(
    data.footer.typography.fontSize
  );
  const [defaultCallFontSize, setDefaultCallFontSize] = useState(
    data.footer.typography.fontSize
  );
  const [defaultColorForHeader, setDefaultColorForHeader] = useState(
    data.heading.typography.color
  );
  const [defaultColorForSubTitle, setDefaultColorForSubTitle] = useState(
    data.subtitle.typography.color
  );
  const [defaultColorForTextArea, setDefaultColorForTextArea] = useState(
    data.footer.typography.color
  );
  const [defaultColorForCall, setDefaultColorForCall] = useState(
    data.footer.typography.color
  );
  const [editingText, setEditingText] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState("front");

  // const getText = (text) => {
  //   setUserText(text);
  // };

  const logoChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const getImage = (image) => {
    setUserImage(image);
  };
  const getSelectedFontSizeForHeader = (fontSize) => {
    setDefaultHeaderFontSize(fontSize);
  };
  const getSelectedFontSizeForSubTitle = (fontSize) => {
    setDefaultSubTitleFontSize(fontSize);
  };
  const getSelectedFontSizeForTextArea = (fontSize) => {
    setDefaultTextAreaFontSize(fontSize);
  };
  const getSelectedFontSizeForCall = (fontSize) => {
    setDefaultCallFontSize(fontSize);
  };
  const getSelectedColorForHeader = (color) => {
    setDefaultColorForHeader(color);
  };
  const getSelectedColorForSubtitle = (color) => {
    setDefaultColorForSubTitle(color);
  };
  const getSelectedColorForTextArea = (color) => {
    setDefaultColorForTextArea(color);
  };
  const getSelectedColorForCall = (color) => {
    setDefaultColorForCall(color);
  };
  /*  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "zpd9c9ea");
    axios
      .post("https://api.cloudinary.com/v1_1/dugshospt/image/upload", formData)
      .then((res) => {
        console.log(res);
      });
  };
 */
  const handle = (e) => {
    savePDF(ref.current);
  };
  const onReset = () => {
    setDefaultHeaderFontSize(data.heading.typography.fontSize);
    setDefaultSubTitleFontSize(data.subtitle.typography.fontSize);
    setDefaultTextAreaFontSize(data.footer.typography.fontSize);
    setDefaultCallFontSize(data.footer.typography.fontSize);
    setDefaultColorForHeader(data.heading.typography.color);
    setDefaultColorForSubTitle(data.subtitle.typography.color);
    setDefaultColorForTextArea(data.footer.typography.color);
    setDefaultColorForCall(data.footer.typography.color);
    setTitle("Suite 503, 22 Market Street, Sydney NSW 2000");
    setSubtitle("info@hospitalityservicesaustralia.com.au");
    setTextArea("www.hospitalityservicesaustralia.com.au");
    setCall("0424 488 476");
    // window.location.reload();
  };

  return (
    <div className="business-card-edit-container">
      {isPreviewOpen && (
        <PDFExport scale={1}>
          <div className="overlays">
            <div
              ref={ref}
              className="container"
              style={{
                zIndex: "22222222",
                color: "white",
                position: "absolute",

                // height: "100vh",
                // width: "100%",
                background: "white",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                // height: "100vh",
                width: "40%",
                height: "auto",

                padding: "none",

                boxShadow: "5px 5px 5px black",
                margin: "auto",
                overflowX: "hidden",
                overflowY: "hidden",
                marginTop: "1rem",
              }}
            >
              <div className="image-container" style={{ marginTop: "-2rem" }}>
                <img
                  src={isPreviewOpen ? front : templateImage2}
                  alt=""
                  className="template-image"
                />

                {/* <img
            src={selectedImage ? selectedImage : data.logo.source}
            alt=""
            className="logo-image"
            title="click to upload"
          /> */}
                {/* <input
            type="file"
            className="logo-upload"
            onChange={(e) => logoChangeHandler(e)}
          /> */}
                {/* <Draggable>
            <div>
              <EditText
                className="logo-subtitle"
                defaultValue="YOUR-COMPANY-NAME"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              />
            </div>
          </Draggable> */}
                <OutsideAlerter
                  setIsEditMode={setIsEditMode}
                  style={{ position: "absolute" }}
                >
                  <div className="content">
                    <div
                      id
                      className="text-containers"
                      style={{
                        position: "absolute",
                        top: data.heading.position.top + "rem",
                        left: data.heading.position.left + "px",
                        color: defaultColorForHeader,
                      }}
                    >
                      <img src={homeLogo} alt="" />
                      <EditText
                        onEditMode={() => {
                          setEditingText("title");
                          setIsEditMode(true);
                        }}
                        value={title}
                        onChange={(value) => setTitle(value)}
                        style={{
                          fontSize: defaultHeaderFontSize + "px",
                          fontWeight: data.heading.typography.isBold && "bold",
                          color: defaultColorForHeader,
                        }}
                      />
                    </div>

                    <div
                      className="text-containers"
                      style={{
                        position: "absolute",
                        top: data.subtitle.position.top + "rem",
                        left: data.subtitle.position.left + "px",
                      }}
                    >
                      <img src={emailLogo} alt="" />
                      <EditText
                        onEditMode={() => {
                          setIsEditMode(true);
                          setEditingText("subtitle");
                        }}
                        onSave={() => {
                          setIsEditMode(false);
                        }}
                        value={subtitle}
                        style={{
                          fontSize: defaultSubTitleFontSize + "px",
                          fontWeight: data.subtitle.typography.isBold && "bold",
                          color: defaultColorForSubTitle,
                        }}
                        onChange={(value) => setSubtitle(value)}
                      />
                    </div>

                    <div
                      className="text-containers"
                      style={{
                        position: "absolute",
                        top: data.footer.position.top + "rem",
                        left: data.footer.position.left + "px",
                      }}
                    >
                      <img src={websiteImage} alt="" />
                      <EditText
                        onEditMode={() => {
                          setIsEditMode(true);
                          setEditingText("text-area");
                        }}
                        className="text-area"
                        value={textArea}
                        style={{
                          fontSize: defaultTextAreaFontSize + "px",
                          fontWeight: data.footer.typography.isBold && "bold",
                          color: defaultColorForTextArea,
                        }}
                        onChange={(value) => setTextArea(value)}
                      />
                    </div>

                    <div
                      className="text-containers"
                      style={{
                        position: "absolute",
                        top: data.call.position.top + "rem",
                        left: data.call.position.left + "px",
                      }}
                    >
                      <img src={websiteImage} alt="" />
                      <EditText
                        onEditMode={() => {
                          setIsEditMode(true);
                          setEditingText("call");
                        }}
                        className="call"
                        value={call}
                        style={{
                          fontSize: defaultCallFontSize + "px",
                          fontWeight: data.call.typography.isBold && "bold",
                          color: defaultColorForCall,
                        }}
                        onChange={(value) => setCall(value)}
                      />
                    </div>
                  </div>
                </OutsideAlerter>
              </div>
              <div
                className="image-container"
                ref={ref}
                style={{ marginTop: "-7rem" }}
              >
                <img
                  src={isPreviewOpen ? back : back}
                  alt=""
                  className="template-image"
                />

                {/* <img
            src={selectedImage ? selectedImage : data.logo.source}
            alt=""
            className="logo-image"
            title="click to upload"
          /> */}
                {/* <input
            type="file"
            className="logo-upload"
            onChange={(e) => logoChangeHandler(e)}
          /> */}
                {/* <Draggable>
            <div>
              <EditText
                className="logo-subtitle"
                defaultValue="YOUR-COMPANY-NAME"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              />
            </div>
          </Draggable> */}
              </div>
              {/* <Pdf targetRef={ref} filename="business-card.pdf">
              {({ toPdf }) => {}}
            </Pdf> */}
            </div>
            <Button
              onClick={handle}
              style={{
                zIndex: "11111111111111111111111111111111111111111111111",
                position: "absolute",
                left: "71%",
                top: "3%",
                backgroundColor: "#f2f3f5",
                color: "black",
              }}
            >
              {<BiSend style={{ fontSize: "20px" }} />} Submit
            </Button>
            <Button
              onClick={() => setIsPreviewOpen(false)}
              style={{
                zIndex: "11111111111111111111111111111111111111111111111",
                position: "absolute",
                left: "71%",
                top: "11%",
              }}
            >
              <MdCancel style={{ fontSize: "20px" }} /> Cancel
            </Button>
          </div>
        </PDFExport>
      )}

      <div className="top-bar">
        <h1>Edit Your Business Card</h1>
        <div className="button-container">
          <Button
            text="Reset"
            backgroundColor="#f2f3f5"
            color="black"
            onClick={() => onReset()}
          />
          <Button text="Preview" onClick={() => setIsPreviewOpen(true)} />
        </div>
      </div>
      <div className="whole-body-container">
        <div className="sidebar">
          <div
            className={active === "text" ? "active" : "undefined"}
            onClick={() => setActive("text")}
          >
            <IoIosText className="icon " />
            <p>Text</p>
          </div>
          <div
            className={active === "images" ? "active" : "undefined"}
            onClick={() => setActive("images")}
          >
            <FaImages className="icon" />
            <p>Images</p>
          </div>
          <div
            className={active === "shapes" ? "active" : "undefined"}
            onClick={() => setActive("shapes")}
          >
            <BiShapeSquare className="icon" />
            <p>Shapes</p>
          </div>
          <div
            className={active === "qr" ? "active" : "undefined"}
            onClick={() => setActive("qr")}
          >
            <RiBarcodeBoxFill className="icon" />
            <p>QR Code</p>
          </div>
          <div
            className={active === "tables" ? "active" : "undefined"}
            onClick={() => setActive("tables")}
          >
            <AiOutlineTable className="icon" />
            <p>Tables</p>
          </div>
        </div>

        {/* {active === "text" && !editMode && <Text getText={getText} />} */}
        {editMode && (
          <EditTexts
            editMode={editMode}
            setIsEditMode={setIsEditMode}
            defaultHeaderFontSize={defaultHeaderFontSize}
            defaultSubTitleFontSize={defaultSubTitleFontSize}
            defaultTextAreaFontSize={defaultTextAreaFontSize}
            defaultCallFontSize={defaultCallFontSize}
            getSelectedFontSizeForHeader={getSelectedFontSizeForHeader}
            getSelectedFontSizeForSubTitle={getSelectedFontSizeForSubTitle}
            getSelectedFontSizeForTextArea={getSelectedFontSizeForTextArea}
            getSelectedFontSizeForCall={getSelectedFontSizeForCall}
            getSelectedColorForHeader={getSelectedColorForHeader}
            getSelectedColorForSubtitle={getSelectedColorForSubtitle}
            getSelectedColorForTextArea={getSelectedColorForTextArea}
            getSelectedColorForCall={getSelectedColorForCall}
            editingText={editingText}
          />
        )}
        {active === "images" && <UploadImage getImage={getImage} />}
        {pageSelected === "front" ? (
          <div className="image-container">
            <img
              src={isPreviewOpen ? front : templateImage2}
              alt=""
              className="template-image"
            />

            {/* <img
            src={selectedImage ? selectedImage : data.logo.source}
            alt=""
            className="logo-image"
            title="click to upload"
          /> */}
            {/* <input
            type="file"
            className="logo-upload"
            onChange={(e) => logoChangeHandler(e)}
          /> */}
            {/* <Draggable>
            <div>
              <EditText
                className="logo-subtitle"
                defaultValue="YOUR-COMPANY-NAME"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              />
            </div>
          </Draggable> */}
            <OutsideAlerter
              setIsEditMode={setIsEditMode}
              style={{ position: "absolute" }}
            >
              <div className="content">
                <Draggable>
                  <div
                    id
                    className="text-containers"
                    style={{
                      position: "absolute",
                      top: data.heading.position.top + "rem",
                      left: data.heading.position.left + "px",
                    }}
                  >
                    <img src={homeLogo} alt="" />
                    <EditText
                      onEditMode={() => {
                        setEditingText("title");
                        setIsEditMode(true);
                      }}
                      value={title}
                      onChange={(value) => setTitle(value)}
                      style={{
                        fontSize: defaultHeaderFontSize + "px",
                        fontWeight: data.heading.typography.isBold && "bold",
                        color: defaultColorForHeader,
                      }}
                    />
                  </div>
                </Draggable>
                <Draggable>
                  <div
                    className="text-containers"
                    style={{
                      position: "absolute",
                      top: data.subtitle.position.top + "rem",
                      left: data.subtitle.position.left + "px",
                    }}
                  >
                    <img src={emailLogo} alt="" />
                    <EditText
                      onEditMode={() => {
                        setIsEditMode(true);
                        setEditingText("subtitle");
                      }}
                      onSave={() => {
                        setIsEditMode(false);
                      }}
                      value={subtitle}
                      style={{
                        fontSize: defaultSubTitleFontSize + "px",
                        fontWeight: data.subtitle.typography.isBold && "bold",
                        color: defaultColorForSubTitle,
                      }}
                      onChange={(value) => setSubtitle(value)}
                    />
                  </div>
                </Draggable>
                <Draggable>
                  <div
                    className="text-containers"
                    style={{
                      position: "absolute",
                      top: data.footer.position.top + "rem",
                      left: data.footer.position.left + "px",
                    }}
                  >
                    <img src={websiteImage} alt="" />
                    <EditText
                      onEditMode={() => {
                        setIsEditMode(true);
                        setEditingText("text-area");
                      }}
                      className="text-area"
                      value={textArea}
                      style={{
                        fontSize: defaultTextAreaFontSize + "px",
                        fontWeight: data.footer.typography.isBold && "bold",
                        color: defaultColorForTextArea,
                      }}
                      onChange={(value) => setTextArea(value)}
                    />
                  </div>
                </Draggable>
                <Draggable>
                  <div
                    className="text-containers"
                    style={{
                      position: "absolute",
                      top: data.call.position.top + "rem",
                      left: data.call.position.left + "px",
                    }}
                  >
                    <img src={websiteImage} alt="" />
                    <EditText
                      onEditMode={() => {
                        setIsEditMode(true);
                        setEditingText("call");
                      }}
                      className="call"
                      value={call}
                      style={{
                        fontSize: defaultCallFontSize + "px",
                        fontWeight: data.call.typography.isBold && "bold",
                        color: defaultColorForCall,
                      }}
                      onChange={(value) => setCall(value)}
                    />
                  </div>
                </Draggable>
              </div>
            </OutsideAlerter>
          </div>
        ) : (
          <div className="image-container">
            <img
              src={isPreviewOpen ? back : back}
              alt=""
              className="template-image"
            />

            {/* <img
            src={selectedImage ? selectedImage : data.logo.source}
            alt=""
            className="logo-image"
            title="click to upload"
          /> */}
            {/* <input
            type="file"
            className="logo-upload"
            onChange={(e) => logoChangeHandler(e)}
          /> */}
            {/* <Draggable>
            <div>
              <EditText
                className="logo-subtitle"
                defaultValue="YOUR-COMPANY-NAME"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              />
            </div>
          </Draggable> */}
          </div>
        )}

        <div className="front-back-toggle-container">
          <h2>Pages</h2>
          <div
            onClick={() => setPageSelected("front")}
            className={
              pageSelected == "front"
                ? "front-container active"
                : "front-container "
            }
          >
            <img src={templateImage2} alt="" />
            <span>Front</span>
          </div>
          <div
            onClick={() => setPageSelected("back")}
            className={
              pageSelected == "back"
                ? "back-container active"
                : "back-container"
            }
          >
            <img src={back} alt="" />
            <span>Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardEdit;
/* 
<div className="top">
                <Draggable>
                  <div
                    id
                    style={{
                      position: "relative",
                      top: data.heading.position.top + "rem",
                      left: data.heading.position.left + "px",
                      color: defaultColorForHeader,
                    }}
                  >
                    <EditText
                      onEditMode={() => {
                        setEditingText("title");
                        setIsEditMode(true);
                      }}
                      value={title}
                      onChange={(value) => setTitle(value)}
                      style={{
                        fontSize: defaultHeaderFontSize + "px",
                        fontWeight: data.heading.typography.isBold && "bold",
                        color: defaultColorForHeader,
                      }}
                    />
                  </div>
                </Draggable>

                <Draggable>
                  <div
                    style={{
                      position: "relative",
                      top: data.subtitle.position.top + "rem",
                      left: data.subtitle.position.left + "px",
                    }}
                  >
                    <EditText
                      onEditMode={() => {
                        setIsEditMode(true);
                        setEditingText("subtitle");
                      }}
                      onSave={() => {
                        setIsEditMode(false);
                      }}
                      value={subtitle}
                      style={{
                        fontSize: defaultSubTitleFontSize + "px",
                        fontWeight: data.subtitle.typography.isBold && "bold",
                        color: defaultColorForSubTitle,
                      }}
                      onChange={(value) => setSubtitle(value)}
                    />
                  </div>
                </Draggable>

                {/* <Draggable>
                <div>
                  <Resizable
                    style={userText ? { border: "1px solid black" } : {}}
                    size={{ width: state.width, height: state.height }}
                    onResizeStop={(e, direction, ref, d) => {
                      setState({
                        width: state.width + d.width,
                        height: state.height + d.height,
                      });
                    }}
                  >
                    <div style={{ width: "100%", height: "400px" }}>
                      <EditText
                        value={userText}
                        style={{ fontSize: "20px" }}
                        onChange={(value) => setUserText(value)}
                      />
                    </div>
                  </Resizable>
                </div>
              </Draggable> 
              {userImage && (
                <Draggable>
                  <div>
                    <Resizable
                      style={{ border: "1px solid black" }}
                      size={{ width: state.width, height: state.height }}
                      onResizeStop={(e, direction, ref, d) => {
                        setState({
                          width: state.width + d.width,
                          height: state.height + d.height,
                        });
                      }}
                    >
                      {" "}
                      <img
                        src={userImage}
                        style={{ height: state.height, width: state.width }}
                      />
                    </Resizable>
                  </div>
                </Draggable>
              )}
            </div>
            <div className="bottom">
              <Draggable>
                <div
                  style={{
                    position: "relative",
                    top: data.footer.position.top + "rem",
                    left: data.footer.position.left + "px",
                  }}
                >
                  <EditTextarea
                    onEditMode={() => {
                      setIsEditMode(true);
                      setEditingText("text-area");
                    }}
                    className="text-area"
                    value={textArea}
                    style={{
                      fontSize: defaultTextAreaFontSize + "px",
                      fontWeight: data.footer.typography.isBold && "bold",
                      color: defaultColorForTextArea,
                    }}
                    onChange={(value) => setTextArea(value)}
                  />
                </div>
              </Draggable>
            </div> */

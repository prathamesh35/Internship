import React, { useState } from "react";
import './Styles/TextForm.css';
import Counter from "./Clscomp";

export default function TextForm(props) {
  console.log(props); 
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    <div className="main">
      <div>
        <h4 className="head">{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"value={text} onChange={handleOnChange} id="myBox"rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          LowerCase
        </button>
      </div>
      <div className="container my-4">
        <h3 className="head">Text Counter</h3>
        <p className="head">{text.split(" ").length} words and {text.length} characters</p>
      </div>
      </div>
      <Counter/>
    </>
  );
}
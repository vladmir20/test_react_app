import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const onTextChange = (event) => {
    setPara(event.target.value);
  };
  const onUpClick = () => {
    let newText = paraText.toUpperCase();
    setPara(newText);
  };
  const onDownClick = () => {
    let newText = paraText.toLowerCase();
    setPara(newText);
  };
  const [paraText, setPara] = useState("");
  return (
    <>
      <div className="input-group my-3">
        <div className=" my-3 container input-group-text">
          <h3>{props.heading}</h3>
        </div>
        <textarea
          className="form-control"
          aria-label="With textarea"
          rows="8"
          id="myForm"
          value={paraText}
          placeholder="Please Enter Something💫🌟"
          onChange={onTextChange}
        ></textarea>
      </div>
      <div>
        <button onClick={onUpClick} className="btn btn-primary ">
          Convert to Uppercase
        </button>
        <button onClick={onDownClick} className="btn btn-primary mx-3">
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-4">
        <h3>You're Text Summary</h3>
        <div className="container">
          <span>
            You have written total number of {paraText.split(" ").length}
            <strong> words</strong> and {paraText.length}{" "}
            <strong>characters</strong>
          </span>
          <br></br>
          <span>
            {0.008 * paraText.split(" ").length} minutes to read this.
          </span>
        </div>
      </div>
      <div className="container">
        <h3>Preview</h3>
        {paraText}
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

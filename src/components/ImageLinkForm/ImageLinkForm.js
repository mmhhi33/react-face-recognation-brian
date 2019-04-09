import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"Our Magic Brain Can Detect your face in your picture. JUST TRY IT."}
      </p>
      <div className="center br3">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="br3 f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            id="mybtn"
            className="br3 w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

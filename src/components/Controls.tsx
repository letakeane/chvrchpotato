import React from "react";
import "../stylesheets/Controls.css";

const Controls = ({ pressA, pressB }) => {
  return (
    <div className="Controls">
      <div className="A" onClick={pressA}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">A</span>
      </div>
      <div className="B" onClick={pressB}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">B</span>
      </div>
    </div>
  );
};

export default Controls;

import React from "react";
import "../stylesheets/Controls.css";

const Controls = ({ pressA, pressB }) => {
  return (
    <div className="Controls">
      <button className="A" onClick={pressA}>
        A
      </button>
      <button className="B" onClick={pressB}>
        B
      </button>
    </div>
  );
};

export default Controls;

import React from "react";
import "../stylesheets/Window.css";

const Window = ({ action, optionA, optionB }) => {
  return (
    <div className="Window">
      <div className="action">{action}</div>
      <div className="optionA">{optionA}<br></br>PRESS A</div>
      <div className="optionB">{optionB}<br></br>PRESS B</div>
    </div>
  );
};

export default Window;

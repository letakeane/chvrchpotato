import React from "react";
import "../stylesheets/Window.css";

interface WindowProps {
  action: string;
  optionA: string;
  optionB: string;
}

const Window: React.FC<WindowProps> = ({ action, optionA, optionB }) => {
  return (
    <div className="Window">
      <div className="action">{action}</div>
      <div className="optionA">
        {optionA}
        <br />
        <strong>PRESS A</strong>
      </div>
      <div className="optionB">
        {optionB}
        <br />
        <strong>PRESS B</strong>
      </div>
    </div>
  );
};

export default Window;

import React from "react";
import "../stylesheets/Stats.css";

const Stats = ({patience, credibility, strength}) => {

  const determineAmount = amount => {
    if (amount >= 61) return "full";
    if (amount >= 15 && amount <= 60) return "warning";
    if (amount <= 14) return "depleted";
  };


  return (
    <div className="Stats">
      <div className="patience">
        <p>patience: {patience}%</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(patience)}
            style={{ width: `${patience}%` }}
          ></div>
        </div>
      </div>
      <div className="credibility">
        <p>credibility: {credibility}%</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(credibility)}
            style={{ width: `${credibility}%` }}
          ></div>
        </div>
      </div>
      <div className="strength">
        <p>strength: {strength}%</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(strength)}
            style={{ width: `${strength}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

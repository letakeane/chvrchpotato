import React, { useState, useEffect } from "react";
import "../stylesheets/Stats.css";

const Stats = () => {
  const [credibility, setCredibility] = useState(100);
  const [patience, setPatience] = useState(60);
  const [power, setPower] = useState(100);
  const [amount, setAmount] = useState("full");

  const determineAmount = amount => {
    if (amount >= 61) return "full";
    if (amount >= 15 && amount <= 60) return "warning";
    if (amount <= 14) return "depleted";
  };

  return (
    <div className="Stats">
      <div className="patience">
        <p>Patience</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(patience)}
            style={{ width: patience + "%" }}
          ></div>
        </div>
      </div>
      <div className="credibility">
        <p>Credibility</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(credibility)}
            style={{ width: credibility + "%" }}
          ></div>
        </div>
      </div>
      <div className="power">
        <p>Power</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(power)}
            style={{ width: power + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

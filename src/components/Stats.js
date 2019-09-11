import React, { useState, useEffect } from "react";
import "../stylesheets/Stats.css";

const Stats = ({currentPatience, currentCredibility, currentStrength}) => {
  const [patience, setPatience] = useState(currentPatience);
  const [credibility, setCredibility] = useState(currentCredibility);
  const [strength, setStrength] = useState(currentStrength);
  const [amount, setAmount] = useState("full");

  const determineAmount = amount => {
    if (amount >= 61) return "full";
    if (amount >= 15 && amount <= 60) return "warning";
    if (amount <= 14) return "depleted";
  };

  const setAll = async () => {
    try {
      await setPatience(currentPatience);
      await setCredibility(currentCredibility);
      await setStrength(currentStrength);
    } catch(error) {
      console.log(error)
    }
  }

  setAll();

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
      <div className="strength">
        <p>Strength</p>
        <div className="statusbar">
          <div
            className={"stat " + determineAmount(strength)}
            style={{ width: strength + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

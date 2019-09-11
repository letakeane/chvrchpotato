import React, { useState } from "react";
import Window from "./Window";
import Controls from "./Controls";
import Stats from "./Stats";
import missionData from "../data/missions";
import "../stylesheets/App.css";

function App() {
  const [currentMission, setCurrentMission] = useState(missionData[1]);
  const [currentStory, setCurrentStory] = useState(currentMission[1]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Window
          action={currentStory.action}
          optionA={currentStory.optionA.text}
          optionB={currentStory.optionB.text}
        />
      </main>

      <footer>
        <Controls
          pressA={() => setCurrentStory(currentMission[currentStory.optionA.storyID])}
          pressB={() => setCurrentStory(currentMission[currentStory.optionB.storyID])}
        />
        <Stats
          currentPatience={currentStory.stats.patience}
          currentCredibility={currentStory.stats.credibility}
          currentStrength={currentStory.stats.strength}
        />
      </footer>
    </div>
  );
}

export default App;

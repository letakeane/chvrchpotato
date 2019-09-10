import React, { useState } from "react";
import Window from "./Window";
import Controls from "./Controls";
import Stats from "./Stats";
import storyData from '../data/story';
import "../stylesheets/App.css";

function App() {
  const [story, setStory] = useState(storyData);

  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Window
          action="Action here!"
          optionA="Option A here!"
          optionB="Option B here!"
        />
      </main>

      <footer>
        <Controls />
        <Stats />
      </footer>
    </div>
  );
}

export default App;

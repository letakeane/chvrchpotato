import React, { useState, useEffect } from "react";
import Window from "./Window";
import Controls from "./Controls";
import Stats from "./Stats";
import stories from "../data/missions";
import "../stylesheets/App.css";

const App = () => {
  const [currentStory, setCurrentStory] = useState(stories[1]);
  const [patience, setPatience] = useState(60);
  const [credibility, setCredibility] = useState(100);
  const [strength, setStrength] = useState(100);
  const [storyLoaded, setStoryLoaded] = useState(false);

  const setStats = () => {
    setPatience(checkValue(patience, currentStory.stats.patience));
    setCredibility(checkValue(credibility, currentStory.stats.credibility));
    setStrength(checkValue(strength, currentStory.stats.strength));
  };

  const checkValue = (currVal, newVal) => {
    if (currVal + newVal >= 100) {
      return 100
    } else if (currVal + newVal <= 0) {
      return 0
    } else {
      return currVal + newVal;
    }
  }

  useEffect(() => {
    setStats();
    setStoryLoaded(true);
    // window.addEventListener('onorientationchange', forced rerender here);
  }, [])

  const pressA = () => {
    setCurrentStory(stories[currentStory.optionA.storyID])
    setStats();
  };

  const pressB = () => {
    setCurrentStory(stories[currentStory.optionB.storyID])
    setStats();
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      {window.screen.orientation.type.includes('portrait') &&
        <h1 className="orientation-warning">Please rotate device to landscape mode!</h1>
      }

      {window.screen.orientation.type.includes('landscape') && storyLoaded && (
        <>
          <main>
            <Window
              action={currentStory.action}
              optionA={currentStory.optionA.text}
              optionB={currentStory.optionB.text}
            />
            <Controls pressA={pressA} pressB={pressB} />
          </main>

          <footer>
            <Stats
              patience={patience}
              credibility={credibility}
              strength={strength}
            />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
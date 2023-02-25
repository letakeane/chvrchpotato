import React, { useState, useEffect } from "react";
import Window from "./Window.tsx";
import Controls from "./Controls.tsx";
import Stats from "./Stats.tsx";
import stories from "../data/missions";
import "../stylesheets/App.css";

const App: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(stories[1]);
  const [patience, setPatience] = useState<number>(60);
  const [credibility, setCredibility] = useState<number>(100);
  const [strength, setStrength] = useState<number>(100);
  const [storyLoaded, setStoryLoaded] = useState<boolean>(false);

  const setStats = () => {
    setPatience(checkValue(patience, currentStory.stats.patience));
    setCredibility(checkValue(credibility, currentStory.stats.credibility));
    setStrength(checkValue(strength, currentStory.stats.strength));
  };

  const checkValue = (currVal: number, newVal: number) => {
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
import React, { Component } from "react";
import Window from "./Window";
import Controls from "./Controls";
import Stats from "./Stats";
import stories from "../data/missions";
import "../stylesheets/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStory: stories[1],
      patience: 60,
      credibility: 100,
      strength: 100,
      storyLoaded: false,
    };
  }

  componentDidMount() {
    this.setStats();
    this.setState({ storyLoaded: true });
  }

  setStats = () => {
    this.setState({
      patience:
        this.checkValue(this.state.patience, this.state.currentStory.stats.patience),
      credibility:
        this.checkValue(this.state.credibility, this.state.currentStory.stats.credibility),
      strength:
        this.checkValue(this.state.strength, this.state.currentStory.stats.strength)
    });
  };

  checkValue = (currVal, newVal) => {
    if (currVal + newVal >= 100) {
      return 100
    } else if (currVal + newVal <= 0) {
      return 0
    } else {
      return currVal + newVal;
    }
  }

  pressA = () => {
    this.setState(
      {
        currentStory: stories[this.state.currentStory.optionA.storyID],
      },
      () => {
        this.setStats();
      }
    );
  };

  pressB = () => {
    this.setState(
      {
        currentStory: stories[this.state.currentStory.optionB.storyID],
      },
      () => {
        this.setStats();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        {this.state.storyLoaded && (
          <>
            <main>
              <Window
                action={this.state.currentStory.action}
                optionA={this.state.currentStory.optionA.text}
                optionB={this.state.currentStory.optionB.text}
              />
              <Controls pressA={this.pressA} pressB={this.pressB} />
            </main>

            <footer>
              <Stats
                patience={this.state.patience}
                credibility={this.state.credibility}
                strength={this.state.strength}
              />
            </footer>
          </>
        )}
      </div>
    );
  }
}

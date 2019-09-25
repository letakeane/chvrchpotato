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
      storyLoaded: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        patience: this.state.patience + this.state.currentStory.stats.patience,
        crediblity:
          this.state.credibility + this.state.currentStory.stats.credibility,
        strength: this.state.strength + this.state.currentStory.stats.strength
      },
      this.setState({ storyLoaded: true })
    );
  }

  pressA = () => {
    this.setState(
      {
        currentStory: stories[this.state.currentStory.optionA.storyID]
      },
      () => {
        this.setState({
          patience:
            this.state.patience + this.state.currentStory.stats.patience,
          credibility:
            this.state.credibility + this.state.currentStory.stats.credibility,
          strength: this.state.strength + this.state.currentStory.stats.strength
        });
      }
    );
  };

  pressB = () => {
    this.setState(
      {
        currentStory: stories[this.state.currentStory.optionB.storyID]
      },
      () => {
        this.setState({
          patience:
            this.state.patience + this.state.currentStory.stats.patience,
          credibility:
            this.state.credibility + this.state.currentStory.stats.credibility,
          strength: this.state.strength + this.state.currentStory.stats.strength
        });
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
            </main>

            <footer>
              <Controls pressA={this.pressA} pressB={this.pressB} />
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

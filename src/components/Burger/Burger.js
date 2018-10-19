import React, { Component } from "react";
import "./Burger.css";
import EpisodeInfo from "../EpisodeInfo/EpisodeInfo";
import { Consumer } from "../../context";
import RandomButton from "../RandomButton/RandomButton";

class Burger extends Component {
  state = {
    botd: {}
  };

  refresh = e => {
    this.forceUpdate();
  };

  render() {
    return (
      <Consumer>
        {value => {
          const burgers = value.burgers;
          const botd = burgers[Math.floor(Math.random() * burgers.length)];
          return (
            <div>
              <RandomButton refresh={this.refresh} />
              <div className="container">
                <div className="board">
                  <h1>Burger</h1>
                  <h3>Of The Day</h3>
                  <hr />
                  <h4 className="botd-name">{botd.name}</h4>
                  <h4>$5.95</h4>
                </div>
                <EpisodeInfo
                  episodeName={botd.episodeName}
                  episodeNum={botd.episodeNum}
                  trivia={botd.trivia}
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Burger;

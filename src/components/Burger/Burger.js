import React, { Component } from "react";
import "./Burger.css";
import EpisodeInfo from "../EpisodeInfo/EpisodeInfo";
import { Consumer } from "../../context";
import RandomButton from "../RandomButton/RandomButton";
import styled from "styled-components";

const Board = styled.div`
  width: 300px;
  height: 300px;
  background-color: #6b6e76;
  border: 10px solid #af4844;
  color: white;
  padding: 2px;
  margin: 5% auto;
`;

const BotdName = styled.h4`
  margin-top: 40px;
`;

const BoardRule = styled.hr`
  width: 75%;
  border-color: white;
`;

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
          const { burgers } = value;
          const botd = burgers[Math.floor(Math.random() * burgers.length)];
          return (
            <div className="container">
              <RandomButton refresh={this.refresh} />
              <div className="container">
                <Board>
                  <h1>Burger</h1>
                  <h3>Of The Day</h3>
                  <BoardRule />
                  <BotdName>{botd.name}</BotdName>
                  <h4>$5.95</h4>
                </Board>
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

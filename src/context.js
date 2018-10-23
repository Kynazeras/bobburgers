import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    burgers: [
      {
        name: "New Bacon-ings",
        episodeName: "Human Flesh",
        episodeNum: "S01E01",
        trivia: [
          "A pun on the phrase 'New Beginnings', and reference to the restaurant's grand re-re-re opening"
        ]
      },
      {
        name: "The Child Mollester",
        episodeName: "Human Flesh",
        episodeNum: "S01E01",
        trivia: [
          "A reference to child molesters' using candy to lure their victims",
          "This was written by Louise",
          "One person was shown to have ordered the burger, which made Bob very uneasy and refused to let Tina or Louise serve the man"
        ]
      },
      {
        name: "Foot Feta-ish Burger",
        episodeName: "Crawl Space",
        episodeNum: "S01E02",
        trivia: [
          "Comes with feta cheese",
          "A pun on 'foot fetish'",
          "Bob intended this to be the Never Been Feta burger, but Louise changed it"
        ]
      },
      {
        name: "Tunami",
        episodeName: "Crawl Space",
        episodeNum: "S01E02",
        trivia: [
          "A portmanteau of the words 'tuna' and 'tsunami'",
          "The Tunami is Gloria's recipe, which Linda deemed the Burger of the Day while Bob was trapped in the wall"
        ]
      },
      {
        name: "Mission A-Corn-Plished Burger",
        episodeName: "Sacred Cow",
        episodeNum: "S01E03",
        trivia: ["Pun on the phrase 'Mission accomplished'"]
      },
      {
        name: "Pepper Don't Preach Burger",
        episodeName: "Sacred Cow",
        episodeNum: "S01E03",
        trivia: [
          "A pun on the 1986 song by Madonna entitled 'Papa Don't Preach'"
        ]
      },
      {
        name: "Rest in Peas Burger",
        episodeName: "Sacred Cow",
        episodeNum: "S01E03",
        trivia: [
          "A pun on the phrase 'rest in peace,' and a reference to the death of the cow, Moolissa.",
          "Comes with snap peas and carrots",
          "Bob's 100,000th burger",
          "Made of meat from Moo-Lissa"
        ]
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
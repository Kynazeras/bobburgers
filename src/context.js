import React, { Component } from "react";
import data from "./burgers.json";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    burgers: []
  };

  componentWillMount() {
    console.log(data.burgers);
    this.setState({ burgers: data.burgers });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

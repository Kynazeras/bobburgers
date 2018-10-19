import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Bob's_Burgers.svg";
import Burger from "./components/Burger/Burger";
import { Provider } from "./context";

document.body.style = "background: black;";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
          </header>
          <Burger />
        </div>
      </Provider>
    );
  }
}

export default App;

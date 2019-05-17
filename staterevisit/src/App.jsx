import React, { Component, Fragment } from "react";
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <p>This works</p>
          <Game animal="Bobcat" food="meat" />
        </div>
      </Fragment>
    );
  }
}

export default App;

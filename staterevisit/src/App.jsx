import React, { Component, Fragment } from "react";
import Game from "./components/Game";
import Tando from "./components/Tando";
import Button from "./components/Button";
import Clicker from "./components/Clicker";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <p>This works</p>
          <Game animal="Bobcat" food="meat" />
        </div>
        <Tando maxNum={34}/>
        <Button/>
        <Clicker max={10}/>
      </Fragment>
    );
  }
}

export default App;

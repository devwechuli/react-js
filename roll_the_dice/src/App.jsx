import React, { Fragment, Component } from "react";
import RollDice from "./components/RollDice";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
       
 

          <RollDice />
        </div>
      </Fragment>
    );
  }
}

export default App;

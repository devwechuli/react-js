import React, { Component, Fragment } from "react";

class Game extends Component {
  state = {
    name: "Paul Wechuli",
    track: false
  };

  changeState = () => {
    let name = this.state.track ? "Wechuli Paul" : "Paul Wechuli";

    this.setState({ name, track: !this.state.track });
  };



  render() {
    return (
      <Fragment>
        <p>This is the App state</p>
        <p>{this.state.name}</p>
        <p>
          {this.props.animal} eats {this.props.food}
        </p>
        <button onClick={this.changeState}>Change Name</button>
      </Fragment>
    );
  }
}
export default Game;

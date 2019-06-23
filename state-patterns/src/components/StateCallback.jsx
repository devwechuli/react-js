import React, { Component } from "react";

class StateCallback extends Component {
  state = {
    count: 1
  };
  updatestate = () => {
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.updatestate}>Triple Kill</button>
      </div>
    );
  }
}

export default StateCallback;

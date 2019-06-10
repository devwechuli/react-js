import React, { Component } from "react";

class Tando extends Component {
  state = {
    num: 0
  };

  makeTimer = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * this.props.maxNum);
    this.setState({ num: randomNumber });
  }, 2000);

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.num}</h1>
      </React.Fragment>
    );
  }
}

export default Tando;

import React, { Component, Fragment } from "react";

class Clicker extends Component {
  state = {
    number: 1
  };
  handleClick = () => {
    // let randomNumber = Math.floor(
    //   Math.random() * (this.props.max - this.state.number + 1) +
    //     this.state.number
    // );

    let randomNumber = Math.floor(Math.random() * this.props.max);
    this.setState({ number: randomNumber });
  };
  render() {
    return (
      <Fragment>
        <h1>The Number is {this.state.number}</h1>
        {this.state.number === 7 ? (
          <div>Congrats, you win</div>
        ) : (
          <button onClick={this.handleClick}>Random Number</button>
        )}
      </Fragment>
    );
  }
}

export default Clicker;

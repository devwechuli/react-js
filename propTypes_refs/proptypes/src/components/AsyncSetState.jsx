import React, { Component, Fragment } from "react";

class AsyncSetState extends Component {
  state = {
    count: 0
  };
  handleIncrease = () => {
    console.log("called first: ", this.state.count);
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("called second: ", this.state.count);
      }
    );

    console.log("called third: ", this.state.count);
  };

  handleDecrease = () => {
    console.log("called first: ", this.state.count);
    this.setState(
      (state, props) => {
        return { count: state.count - 1 };
      },
      () => {
        console.log("called second", this.state.count);
      }
    );

    console.log("called third: ", this.state.count);
  };
  render() {
    return (
      <Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button onClick={this.handleIncrease}>Increase</button>
          <span style={{ margin: "1rem" }}>{this.state.count}</span>

          <button onClick={this.handleDecrease}>Decrease</button>
        </div>
      </Fragment>
    );
  }
}

export default AsyncSetState;

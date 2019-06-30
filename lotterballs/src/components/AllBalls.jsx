import React, { Component, Fragment } from "react";
import Ball from "./Ball";

class AllBalls extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };
  state = {
    nums: Array.from({ length: this.props.maxBalls })
  };
  generate = () => {
    // this.setState(curState => {
    //   nums: curState.nums.map(n => {
    //     return Math.floor(Math.random() * this.props.maxNum) + 1;
    //   });
    // });
    const newArray = this.state.nums.map(n => {
      return Math.floor(Math.random() * this.props.maxNum) + 1;
    });
    this.setState({ nums: newArray });
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>

        <div>
          {this.state.nums.map(n => {
            return <Ball num={n} />;
          })}
        </div>
        <button onClick={this.handleClick}>Generate </button>
      </section>
    );
  }
}

export default AllBalls;

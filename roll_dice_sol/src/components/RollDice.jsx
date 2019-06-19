import React, { Component, Fragment } from "react";
import Die from "./Die";
import styles from "./Die.module.css";

export class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  state = {
    die1: "one",
    die2: "one",
    rolling: false
  };
  Roll = () => {
    //pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ die1: newDie1, die2: newDie2, rolling: true });
    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <Fragment>
        <div className={`${styles.rolldice}`}>
          <div className={`${styles.rolldicecont}`}>
            <Die face={this.state.die1} rolling={this.state.rolling} />
            <Die face={this.state.die2} rolling={this.state.rolling} />
          </div>

          <button onClick={this.Roll} disabled={this.state.rolling}>
            {" "}
            {this.state.rolling ? "Rolling" : "Roll Dice"}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default RollDice;

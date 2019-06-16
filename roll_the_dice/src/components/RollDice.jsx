import React, { Component, Fragment } from "react";
import Die from "./Die";

class RollDice extends Component {
  state = {
    die1: "one",
    die2: "two"
  };

  rollDice = () => {
    const translationArray = [
      "empty",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six"
    ];
    let firstRandom = Math.floor(Math.random() * 6 + 1);
    let secondRandom = Math.floor(Math.random() * 6 + 1);

    this.setState({
      die1: translationArray[firstRandom],
      die2: translationArray[secondRandom]
    });
  };
  render() {
    return (
      <Fragment>
        <div className="columns is-centered">
          <div className="column is-half">
              <h1 className="title m-t-md">Roll Dice Exercise</h1>
            <Die die={this.state.die1} />
            <Die die={this.state.die2} />
          </div>
   
        </div>

        <div className="columns is-centered">
          <div className="column is-half">
         
          <button
              onClick={this.rollDice}
              className="button is-primary is-outlined has-text-centered"
            >
              {" "}
              Roll Dice
            </button>
          </div>
   
        </div>

        
       
        
        <div />
      </Fragment>
    );
  }
}

export default RollDice;

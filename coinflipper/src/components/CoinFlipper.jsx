import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  state = {
    totalFlips: 0,
    totalHeads: 0,
    totalTails: 0,
    status: 0
  };

  changeStatus = () => {
    const currState = { ...this.state };
    currState.totalFlips += 1;
    const coinState = Math.floor(Math.random() * 2) + 1;
    if (currState.status === 0) {
      //randomly asssign the coin state      
      if (coinState === 1) {
        currState.totalHeads = 1;
        currState.status = 1;
      } else {
        currState.totalTails = 1;
        currState.status = 2;
      }
    } else if (coinState === 1) {
      currState.totalHeads += 1;
      
    } else {
      currState.totalTails += 1;
      
    }
    this.setState({ ...currState,status:coinState });
  };
  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <h2 className="title is-centered">Let's flip a coin</h2>
          <Coin coinStatus={this.state.status} />

          <p>
            Out of {this.state.totalFlips} flips, there have been{" "}
            {this.state.totalHeads} heads and {this.state.totalTails} tails
          </p>
          <button
            onClick={this.changeStatus}
            className="button is-primary is-centered is-outlined"
          >
            Flip Me
          </button>
        </div>
      </div>
    );
  }
}

export default CoinFlipper;

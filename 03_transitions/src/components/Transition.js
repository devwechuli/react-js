import React, { Component } from "react";
import "../css/App.css";
import Transition from "react-transition-group/Transition";

class TransitionComp extends Component {
  state = {
    show: true
  };
  toggleHandler = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Transition
          in={this.state.show}
          timeout={{
            enter: 2000,
            exit: 50
          }}
          enter={false}
          exit={false}
        >
          {state => (
            <div className={`square square-${state}`}>
              {`square square-${state}`}
            </div>
          )}
        </Transition>

        <button className="showDiv" onClick={this.toggleHandler}>
          Toggle Section
        </button>
      </div>
    );
  }
}

export default TransitionComp;

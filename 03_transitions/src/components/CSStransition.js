import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "../css/App.css";

class Fade extends Component {
  state = {
    show: true
  };
  toggleHandler = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <CSSTransition in={this.state.show} timeout={5000} classNames="square">
          <div className={`square ${this.state.show}`}>Hello</div>
        </CSSTransition>
        <button className="showDiv" onClick={this.toggleHandler}>
          Toggle Section
        </button>
      </div>
    );
  }
}

export default Fade;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    wordlength: 0
  };

  wordCounterHandler = e => {
    let userInput = e.target.value.length;
    this.setState({ wordlength: userInput });
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.wordCounterHandler} />
        <p>{this.state.wordlength}</p>
      </div>
    );
  }
}

export default App;

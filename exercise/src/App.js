import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./App.css";
import Header from "./components/Header";

class App extends Component {
  state = {
    username: "Paul Wechuli",
    name:"Wafula"
  };

  changeStateHandler = () => {
    this.setState({
      username: "Wechuli Paul"
    
    });
  };

  changePropHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div class="content">
          <button onClick={this.changeStateHandler}>Change State</button>
          <UserInput changeProps={this.changePropHandler} currentValue={this.state.username}/>
          <UserOutput name={this.state.username}  />
        </div>
      </div>
    );
  }
}

export default App;

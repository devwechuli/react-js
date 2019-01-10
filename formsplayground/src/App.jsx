import React, { Component } from "react";
import NameForm from "./components/NameForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">Forms Playground</div>
        <div className="container">
        <NameForm/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

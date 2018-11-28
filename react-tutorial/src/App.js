import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Table />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import PageContent from "./components/PageContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Chat Application for Dummies</h2>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}

export default App;

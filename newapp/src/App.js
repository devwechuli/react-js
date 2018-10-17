import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Paul", age: 25 },
      { id: 2, name: "June", age: 22 },
      { id: 3, name: "Mega", age: 140 }
    ],
    otherState:"this is another state"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: "Paul Wechuli", age: 25 },
        { id: 2, name: "Juny", age: 28 },
        { id: 3, name: "Mega", age: 1900 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, am a React App</h1>
        <p>This is actually working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

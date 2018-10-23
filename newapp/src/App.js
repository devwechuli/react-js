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
    otherState: "this is another state",
    showPersons: false
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

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Paul', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 29 }
      ]
    } )
  }

  toggleContent = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, am a React App</h1>
        <p>This is actually working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <button onClick={this.toggleContent}>Toggle Content</button>

        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Wechulip")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

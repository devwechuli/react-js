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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice(); //Use slice without parameters to copy the whole array/object
    //or we can use the spreas operator as below, this updates the state in an immutable fashion
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleContent = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, am a React App</h1>
        <p>This is actually working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <button onClick={this.toggleContent}>Toggle Content</button>
        {persons}
      </div>
    );
  }
}

export default App;

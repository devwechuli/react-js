import Person from "./Person/Person";
import React, { Component } from "react";

// const Persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         key={person.id}
//         name={person.name}
//         age={person.age}
//         click={() => props.clicked(index)}
//         changed={event => props.changed(event, person.id)}
//       />
//     );
//   });

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor", props);

    //we can implement state here using this.state(){} and use it the same way as before
  }
  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }
  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

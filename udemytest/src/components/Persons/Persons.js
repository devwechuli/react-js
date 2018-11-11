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

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside shouldComponentUppdate",
      nextProps,
      nextState
    );
   // return nextProps.persons !== this.props.persons;
   return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }
  componentDidUpdate(){
    console.log(
      "[UPDATE Persons.js] Inside componentDidUpdate"
      
    );
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

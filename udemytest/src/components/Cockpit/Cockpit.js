import React from "react";
import classes from "./Cockpit.module.css";
import Auxilliary from "../../hoc/Auxilliary";

const Cockpit = props => {
  let assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes=['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes=['red','bold']
  }
  return (
    <Auxilliary>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.togglePersonsHandler}>
        Toggle Persons
      </button>
    </Auxilliary>
  );
};

export default Cockpit;

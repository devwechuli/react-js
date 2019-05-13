import React, { Component } from "react";
import Child from "./Child";

const people = [
  {
    name: "Paul",
    age: 26,
    skills: ["programming", "data Science", "cloud computing", "devops"]
  },
  {
    
    name: "Tony",
    age: 21,
    skills: ["mechanics", "electronics", "quantum", "assembly"]
  }
];
class Hello extends Component {
  render() {
    
    return (
      <React.Fragment>
        <Child name={people[0]["name"]} />
      </React.Fragment>
    );
  }
}


export default Hello;
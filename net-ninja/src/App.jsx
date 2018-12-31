import React, { Component } from "react";
import Ninjas from "./components/Ninjas";

class App extends Component {
  state = {
    ninjas: [
      {
        name: "Paul",
        age: 25,
        belt: "Black"
      },
      {
        name: "John",
        age: 21,
        belt: "Blue"
      },
      {
        name: "Doe",
        age: 78,
        belt: "Red"
      },
      {
        name: "June",
        age: 22,
        belt: "White"
      }
    ]
  };
  render() {
    const ninjas = this.state.ninjas.map((ninja, key) => {
      return (
        <Ninjas name={ninja.name} age={ninja.age} belt={ninja.belt} key={key} />
      );
    });
    return (
      <div className="home">
        <h1>My 'First' react App</h1>
        <div className="ninja-list">{ninjas}</div>
      </div>
    );
  }
}

export default App;

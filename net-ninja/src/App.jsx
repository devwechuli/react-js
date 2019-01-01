import React, { Component } from "react";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

class App extends Component {
  state = {
    ninjas: [
      {
        id: 1,
        name: "Paul",
        age: 25,
        belt: "Black"
      },
      {
        id: 2,
        name: "John",
        age: 21,
        belt: "Blue"
      },
      {
        id: 4,
        name: "June",
        age: 22,
        belt: "White"
      }
    ]
  };
  addNinja = ninja => {
    console.log("Adding ninja");
    ninja.id = Math.random();
    const newNinjaState = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjaState
    });
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Update");
    console.log(prevProps, prevState);
  }
  render() {
    const ninjas = this.state.ninjas.map((ninja, key) => {
      return ninja.age > 2 ? ( //conditional rendering using ternary operator
        <Ninjas
          name={ninja.name}
          age={ninja.age}
          belt={ninja.belt}
          key={ninja.id}
          id={ninja.id}
          deleteNinja={this.deleteNinja}
        />
      ) : null;
    });
    return (
      <div className="home">
        <h1>Ninjas Application</h1>
        <div className="separator">
          <section>
            <div className="ninja-list">{ninjas}</div>
          </section>
          <AddNinja addNinja={this.addNinja} />
          <section />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Maria Mary",
        email: "maria@gmail.com",
        phone: "5334-505-5555"
      },
      {
        id: 3,
        name: "Wechuli Paul",
        email: "pw@gmail.com",
        phone: "055-255-1225"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

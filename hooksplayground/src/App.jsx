import React, { Component } from "react";
import Todo from "./component/Todo";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 ">
            <h2 className="mb-2">My To-do List with React Hooks</h2>
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "become awesome at code" }
    ]
  };
  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addToDo = todo => {
    todo.id = Math.random();

    const newState = [...this.state.todos, todo];
    this.setState({
      todos: newState
    });
  };
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todo's</h1>

        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;

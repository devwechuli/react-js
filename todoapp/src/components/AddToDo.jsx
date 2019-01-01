import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    todos: {
      content: ""
    }
  };
  handleChange = e => {
    const newstate = {
      content: e.target.value
    };
    this.setState({
      todos: newstate
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.addToDo(this.state.todos);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">Add new todo: </label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddToDo;

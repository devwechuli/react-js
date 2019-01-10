import React, { Component } from "react";

class NameForm extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    alert(`A name was submitted ${this.state.value}`);
    this.setState({
        value:''
    })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            type="text"
            id="name"
            name="name"
          />
          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NameForm;

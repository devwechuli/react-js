import React, { Component } from "react";
import "./forms.css";

class ControlledInputs extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [
      {
        firstName: "Paul",
        lastName: "Wechuli"
      }
    ]
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      people: [
        ...this.state.people,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }
      ]
    });
  };
  render() {
    return (
      <section>
        <article>
          <form>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
            <input
              type="submit"
              value="Add Person"
              onClick={this.handleFormSubmit}
            />
          </form>
        </article>
        <article>
          <h1>People</h1>
          {this.state.people.map((person, idx) => (
            <div>
              <span>
                <b>First Name: </b>
                {person.firstName}
              </span>
              <span>
                <b> Last Name: </b>
                {person.lastName}
              </span>
            </div>
          ))}
        </article>
      </section>
    );
  }
}

export default ControlledInputs;

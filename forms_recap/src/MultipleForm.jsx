import React, { Component, Fragment } from 'react';


class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`You just typed ${this.state.username}`);
        this.setState({ username: "" });
    }
    render() {
        return (
            <Fragment>
                <h1>Form demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <button>Submit me</button>
                </form>
            </Fragment>
        )
    }
}

export default MultipleForm;
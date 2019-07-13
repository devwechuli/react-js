import React, { Component, Fragment } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({ username: e.target.value });
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
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                    <button>Submit me</button>
                </form>
            </Fragment>
        )
    }
}

export default Form;
import React, { Component } from 'react';
import uuid from 'uuid';

export class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        };
        this.handleTodochange = this.handleTodochange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleTodochange(e) {
        this.setState({ todo: e.target.value })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.add({ id: uuid(), text: this.state.todo });
        this.setState({ todo: "" });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="todo">New Todo</label>
                    <input type="text" name="todo" id="todo" value={this.state.todo} onChange={this.handleTodochange} placeholder="New Todo" required />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm

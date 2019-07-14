import React, { Component } from 'react';
import uuid from 'uuid';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            height: 0,
            width: 0,
            id: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormInput = this.handleFormInput.bind(this);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.makeBox(this.state);
        this.setState({ color: "", height: "", width: "", id: "" })
    }
    handleFormInput(e) {
        this.setState({ [e.target.name]: e.target.value, id: uuid() });
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="color">Color: </label>
                <input type="text" name="color" onChange={this.handleFormInput} placeholder="color" value={this.state.color} />

                <label htmlFor="height">Height: </label>
                <input type="number" name="height" onChange={this.handleFormInput} placeholder="0" value={this.state.height} />

                <label htmlFor="width">Width: </label>
                <input type="number" name="width" onChange={this.handleFormInput} placeholder="0" value={this.state.width} />


                <button className="btn">Make Box</button>
            </form>
        )
    }
}

export default BoxForm

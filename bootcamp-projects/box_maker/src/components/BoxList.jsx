import React, { Component, Fragment } from 'react'
import BoxForm from './BoxForm';
import Box from './Box';
import uuid from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [

            ]
        }

        this.makeBoxHandler = this.makeBoxHandler.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    makeBoxHandler(box) {
        const prevState = { ...this.state };
        prevState.boxes.push(box);
        this.setState({ boxes: prevState.boxes });
    }
    handleDelete(id) {
        const prevState = { ...this.state };
        const remainingBoxes = prevState.boxes.filter((box) => {
            return box.id !== id;
        })
        this.setState({ boxes: remainingBoxes })
    }
    render() {
        return (
            <Fragment>
                <h1>Color Box Maker</h1>
                <BoxForm makeBox={this.makeBoxHandler} />

                {this.state.boxes.map((box, index) => {
                    return <Box key={box.id} id={box.id} color={box.color} height={box.height} width={box.width} deleteBox={this.handleDelete} />
                })}
            </Fragment>
        )
    }
}

export default BoxList

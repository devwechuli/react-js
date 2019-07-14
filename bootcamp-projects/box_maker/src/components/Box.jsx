import React, { Component, Fragment } from 'react'

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteBox = this.handleDeleteBox.bind(this);
    }
    handleDeleteBox() {
        this.props.deleteBox(this.props.id);
    }
    render() {
        const { color, width, height } = this.props;
        return (
            <Fragment>
                <div className="box" style={{ height: `${height}px`, backgroundColor: color, width: `${width}px` }}>
                    <p>Color = {color}</p>
                    <p>Width = {width}</p>
                    <p>Height = {height}</p>
                </div>
                <button onClick={this.handleDeleteBox} className="deleteBTN">Delete Box</button>
            </Fragment>


        )
    }
}

export default Box;

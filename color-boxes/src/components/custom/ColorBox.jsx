import React, { Component } from 'react';



 class ColorBox extends Component {

    
    render() {
        let {color} = this.props;
        console.log(color);
        return (
            <div style = {{background:color}}className="colorBox">
                hi there
            </div>
        )
    }
}

export default ColorBox;

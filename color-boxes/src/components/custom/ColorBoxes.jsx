import React, { Component, Fragment } from "react";
import ColorBox from "./ColorBox";

export class ColorBoxes extends Component {
  static defaultProps = {
    colors: [
      "blue",
      "magenta",
      "cyan",
      "red",
      "yellow",
      "green",
      "black",
      "purple",
      "brown",
      "maroon",
      "lime",
      "lightpink",
      "gold",
      "gray",
      "linen",
      "pink",
      "teal",
      "wheat",
      "tomato",
      "tan",
      "sienna",
      "salmon",
      "plum",
      "violet"
    ]
  };

  state = {
    colors: {}
  };
  randomColorPicker = () => {
    const randomColor = Math.floor(
      Math.random() * this.props.colors.length + 1
    );
    console.log(randomColor);
    return this.props.colors[randomColor];
  };
  changeColor = (index, color) => {
    const currstate = { ...this.state };
    const colors = currstate.colors;
    colors[index] = color;
    
  };
  changeColorOnClick = (index) =>{
    const currstate = { ...this.state };
    const colors = currstate.colors; 
    let color = this.randomColorPicker();
    colors[index] = color;
   
  }

  render() {
    const items = [];
    for (let i = 0; i <= 15; i++) {
      let color = this.randomColorPicker();
      this.changeColor(i, color);

      items.push(<ColorBox onClick={()=>this.changeColorOnClick(0)} index  color={this.state.colors[i]} />);
    }

    return (
      <Fragment>
        <div className="colorBoxes">{items}</div>
      </Fragment>
    );
  }
}

export default ColorBoxes;

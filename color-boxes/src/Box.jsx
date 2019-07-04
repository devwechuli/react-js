import React, { Component } from "react";
import { choice } from "./helpers";

class Box extends Component {
  static defaultProps = {
    allColors: [
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
    color: choice(this.props.allColors)
  };
  changeColor = () => {
    let newColor;

    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  };
  handleClick = () => {
    this.changeColor();
  };
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;

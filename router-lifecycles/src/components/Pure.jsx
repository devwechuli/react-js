import React, { Component } from "react";

class Pure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Life Cycles"
    };
  }
  
 changeTitle=()=> {
    this.setState({ title: "I was Changed" });
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={this.changeTitle}> Click Me</div>
      </div>
    );
  }
}

export default Pure;

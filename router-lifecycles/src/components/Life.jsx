import React, { Component } from "react";

class Life extends Component {
  // 1. get default props
  // 2. set default state

  constructor(props) {
    console.log("Inside the Constructor");
    super(props);
    this.state = {
      title: "Life Cycles",
      date: new Date()
    };
  }
  componentDidMount() {
    console.log("Inside component did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("Inside ComponentWillUnmount");
    clearInterval(this.timerID);
  }
  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }
  

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    console.log("Inside the render method");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h4>Time: {this.state.date.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default Life;

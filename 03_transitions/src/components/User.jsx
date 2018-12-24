import React, { Component } from "react";
import UserTemplate from "./UserTemplate";

class User extends Component {
  state = {
    name: "Paul",
    lastname: "Wechuli",
    age: 25,
    hobbies: ["music", "philosophy", "football"],
    swahili: true,
    message: function() {
      console.log("This is a function passed as props");
    },
    car: {
      brand: "Ford",
      model: "Auto"
    },
    mother: "Nancy",
    custom: "rt",
    color: "red"
  };
  changeColor() {
    // this.setState({
    //   color: "blue"
    // });
    this.refs.myColor.style.color = "blue";
  }
  render() {
    const style = {
      color: this.state.color
    };
    return (
      <div>
        <h4 style={style} ref="myColor">
          {this.state.mother}
        </h4>
        <div onClick={() => this.changeColor()}>Change Color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}

export default User;

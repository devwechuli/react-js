import React, { Component } from "react";

class Button extends Component {
  state = {
    clicked: false
  };

 clickButton = ()=> {

    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    console.log(this.state.clicked);
    return (
      <React.Fragment>
        <div>
          <h1>{this.state.clicked ? "Clicked" : "Unclicked"}</h1>
          <button onClick={this.clickButton}>Click Me</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Button;

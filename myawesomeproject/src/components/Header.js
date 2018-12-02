import React, { Component } from "react";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     keywords: "Hello"
  //   };
  // }
  state = {
    keywords: ""
  };
  inputChangeHandler(e) {
    this.setState({ keywords: e.target.value });
  }
  render() {
    console.log(this.state.keywords);
    return (
      <header>
        <div className="logo">Logo</div>
        <div className="input">
          <input onChange={e => this.inputChangeHandler(e)} type="text" />
          {/*Alternatively, you could use bind instead of an arrow function */}
          {/* <input onChange={this.inputChangeHandler.bind(this)} type="text" /> */}
        </div>
       
        
      </header>
    );
  }
}

export default Header;

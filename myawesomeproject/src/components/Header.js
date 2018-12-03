import React, { Component } from "react";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     keywords: "Hello"
  //   };
  // }
  state = {
    active: 'active',
    keywords: ""
  };
  inputChangeHandler(e) {
    const value = e.target.value === "" ? 'active' : 'non-active';
    this.setState({ keywords: e.target.value, active: value });
  }
  render() {
    // console.log(this.state.keywords);
    // const style = {
    //   background: "black"
    // };
    // if (this.state.keywords !== "") {
    //   style.background = "blue";
    // } else {
    //   style.background = "black";
    // }
    return (
      // <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
      <header className={this.state.active}>
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

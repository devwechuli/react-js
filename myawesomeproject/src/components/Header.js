import React, { Component } from "react";



class Header extends Component {
  inputChangeHandler(e) {
    console.log(e.target.value);
    console.log("Hey");
  }
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <div className="input">
          <input onChange={e => this.inputChangeHandler(e)} type="text" />
        </div>
      </header>
    );
  }
}

export default Header;

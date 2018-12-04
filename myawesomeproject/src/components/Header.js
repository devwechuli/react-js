import React from "react";

const Header = props => {
  return (
    // <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
    <header >
      <div className="logo">Logo</div>
      <div className="input">
        <input onChange={props.keywords} type="text" />
        {/*Alternatively, you could use bind instead of an arrow function */}
        {/* <input onChange={this.inputChangeHandler.bind(this)} type="text" /> */}
      </div>
    </header>
  );
};

export default Header;

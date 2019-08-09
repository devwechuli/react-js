import React from "react";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "70px",
        background: "pink"
      }}
    >
      <div style={{ marginLeft: "10px", color: "white" }}>
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
      </div>

      <div style={{ marginLeft: "10px" }}>
        <NavLink  exact activeClassName="active-link" to="/dog">Dog</NavLink>
      </div>

      <div style={{ marginLeft: "10px" }}>
        <NavLink exact activeClassName="active-link" to="/about">About</NavLink>
      </div>

      <div style={{ marginLeft: "10px" }}>
        <NavLink exact activeClassName="active-link" to="/contact">Contact Us</NavLink>
      </div>

      
      <div style={{ marginLeft: "10px" }}>
        <NavLink exact activeClassName="active-link" to="/dog/r">Dog_Render_Props</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

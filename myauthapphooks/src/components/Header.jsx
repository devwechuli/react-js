import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Header = props => {
  console.log(props);
  return (
    <nav className="mb-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
};

export default withRouter(Header);

import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = props => {
  const auth = useContext(AuthContext);
  if (localStorage.getItem("token") !== null) {
    auth.login(localStorage.getItem("token"));
  }
  // console.log(props);
  // console.log(auth);
  
  return (
    <nav className="mb-4">
      <NavLink to="/">Home</NavLink>,
      {auth.isAuthenticated
        ? [
            <NavLink key="dashboard" to="/dashboard">
              Dashboard
            </NavLink>,
            <NavLink key="signup" to="/signup">
              Sign Out
            </NavLink>
          ]
        : [
            <NavLink key="signin" to="/signin">
              Sign In
            </NavLink>,
            <NavLink key="signup" to="/signup">
              Sign Up
            </NavLink>
          ]}
    </nav>
  );
};

export default withRouter(Header);

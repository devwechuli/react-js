import React, { useContext } from "react";
import { NavLink} from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = props => {
  const auth = useContext(AuthContext);
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

export default Header;

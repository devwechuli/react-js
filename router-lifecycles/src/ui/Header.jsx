import React from "react";
import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts" activeStyle={{ color: "black" }} activeClassName="selected">
        Posts
      </NavLink>
      <NavLink
        to={{
          pathname: "/profile"
          //   hash:'#wechuli',
          //   search:'?profile=true'
        }}
      >
        Profiles
      </NavLink>
      <NavLink to="/life">Life</NavLink>
      <NavLink to="/conditional">Conditional</NavLink>
      <NavLink to="/purecomponent">PureComp</NavLink>
    </header>
  );
};

export default Header;

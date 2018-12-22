import React from "react";
import { Link, NavLink } from "react-router-dom";

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
    </header>
  );
};

export default Header;

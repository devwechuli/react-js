import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

export default function() {
  return (
    <div className={classes.nav}>
      <div>
        {" "}
        <NavLink exact to="/">
          Discussion
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink to="/rules">Rules</NavLink>
      </div>
      <div>
        {" "}
        <NavLink to="/workflow">Workflow</NavLink>
      </div>
    </div>
  );
}

import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavBar = props => {
//     setTimeout(() => {
//       props.history.push("/about");
//     }, 2000);
// //   console.log(props);

  return (
    <nav className="nav-wrapper blue darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          Poke' Times
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);

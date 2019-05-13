import React from "react";
import classes from './Default.module.css';

const Default = props => {
  //Default props with functional components
  Default.defaultProps = {
    firstname: "John",
    lastname: "Doe"
  };
  console.log(props);
  return (
    <React.Fragment>
      <p className={classes.back}>
        My {props.firstname || "John"}  {props.lastname || "Doe"}
      </p>
    </React.Fragment>
  );
};

export default Default;

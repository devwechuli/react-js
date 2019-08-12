import React from "react";
import {Redirect} from 'react-router-dom';

const Food = props => {
  console.log(props);
  return (
    <div>
        {/* <Redirect exact="true" to="/"/> */}
I am a {props.match.params.name}
    </div>
  );
};

export default Food;

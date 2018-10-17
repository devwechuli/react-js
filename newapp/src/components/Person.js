import React from "react";

const Person = props => {
  return (
    <div>
   
        My Name is {props.name} and I am {props.age} years old {props.children}
  
    </div>
  );
};

export default Person;

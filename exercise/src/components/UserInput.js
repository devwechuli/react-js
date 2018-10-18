import React from "react";

const UserInput = props => {
  return (
    <div>
      <input type="text" onChange={props.changeProps} value={props.currentValue}/>
    </div>
  );
};
export default UserInput;

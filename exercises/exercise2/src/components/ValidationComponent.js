import React from "react";

function ValidationComponent(props) {
  return (
    <div textlength={props.length}>
      <p>{props.children}</p>
    </div>
  );
}

export default ValidationComponent;

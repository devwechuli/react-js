import React from "react";
import "./CharComponent.css";

function CharComponent(props) {
  return (
    <div className="charcomp" onClick={props.click}>
      {props.letter}
    </div>
  );
}

export default CharComponent;

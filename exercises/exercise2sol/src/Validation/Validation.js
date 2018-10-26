import React from "react";

export default function Validation(props) {
  let validationMessage = "Text long Engough";
  if (props.inputLength <= 6) {
    validationMessage = "Text too short";
  }
  return (
    <div>
     <p>{validationMessage}</p>
    </div>
  );
}

import React from "react";

const BoilingVerdict = props => {
  return (
    <React.Fragment>
      {props.celsius >= 100 ? (
        <p className="has-text-primary">The water would boil</p>
      ) : (
        <p className="has-text-danger">The water would not boil</p>
      )}
    </React.Fragment>
  );
};

export default BoilingVerdict;

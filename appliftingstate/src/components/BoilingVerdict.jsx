import React from "react";

const BoilingVerdict = props => {
  return (
    <div>
      {props.celsius >= 100 ? (<p>The water will boil</p>) : (<p>Sorry, the water will not boil</p>)}
    </div>
  );
};

export default BoilingVerdict;

import React from "react";

const Conditional = props => {
  const value = true;

  const returnValue = () => {
    return true;
  };

  const showIt = () => {
    const cond = false;
    if (cond) {
      return <div>ShowIt is set to True</div>;
    } else {
      return <div>ShowIt is set to False</div>;
    }
  };
  return (
    <div>
      {value === true ? (
        <div>Hello,Conditional is true</div>
      ) : (
        "Condition not met"
      )}
      {returnValue()
        ? "The function is returning true"
        : "The function is returning false"}

      {showIt()}
    </div>
  );
};
export default Conditional;

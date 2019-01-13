import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempratureInput from "./TempratureInput";

const Calculator = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <TempratureInput scale="c" />
        </div>
        <div className="col-md-6">
          <TempratureInput scale="f" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;

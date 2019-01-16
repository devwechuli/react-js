import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempratureInput from "./TempratureInput";

const Calculator = () => {
  const [state, changetemp] = useState({ scale: "c", temperature: 24 });
  const handleCelsiusChange = e => {
    changetemp({ scale: "c", temperature: e.target.value });
  };
  const handleFahrenheitChange = e => {
    changetemp({ scale: "f", temperature: e.target.value });
  };
  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  const scale = state.scale;
  const temp = state.temperature;
  const celsius = scale === "f" ? tryConvert(temp, toCelsius) : temp;
  const fahrenheit = scale === "c" ? tryConvert(temp, toFahrenheit) : temp;

  return (
    <React.Fragment>
      <div className="columns">
        <div className="column">
          <TempratureInput
            scale="c"
            temp={celsius}
            handleChange={handleCelsiusChange}
          />
        </div>
        <div className="column">
          <TempratureInput
            scale="f"
            temp={fahrenheit}
            handleChange={handleFahrenheitChange}
          />
        </div>
      </div>
      <BoilingVerdict celsius={celsius} />
    </React.Fragment>
  );
};

export default Calculator;

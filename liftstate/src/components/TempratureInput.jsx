import React,{useState} from 'react'

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

const TempratureInput = (props) => {
  
  const scale = props.scale
    return (
      <React.Fragment>
        <fieldset>
          <legend>Enter temprature in {scaleNames[scale]}:</legend>
          <input
            className="input"
            type="number"
            value={props.temp}
            onChange={props.handleChange}
          />
          
        </fieldset>
      </React.Fragment>
    );
}

export default TempratureInput

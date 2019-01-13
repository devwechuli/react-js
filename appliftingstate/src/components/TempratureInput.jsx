import React,{useState} from 'react'


const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

const TempratureInput = (props) => {

    const [temperature, changeTemp] = useState("");
    const handleChange = e => {
      changeTemp(e.target.value);
    };
  return (
    <fieldset>
    <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
    <input className="form-control" value={temperature} onChange={handleChange} />
 
  </fieldset>
  )
}

export default TempratureInput

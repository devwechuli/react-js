import React, { useState } from "react";

const TextArea = () => {
  const [textInput, changeTextInput] = useState("My Essay");
  const formHandler = e => {
    e.preventDefault();
    alert(`An essay was submitted ${textInput}`);
  };
  const inputHandler = e => {
    changeTextInput(e.target.value);
  };

  return (
    <form onSubmit={formHandler}>
      <label htmlFor="essay">
        <textarea
          className="form-control"
          onChange={inputHandler}
          name="essay"
          id="essay"
          value={textInput}
          cols="30"
          rows="10"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </label>
    </form>
  );
};

export default TextArea;

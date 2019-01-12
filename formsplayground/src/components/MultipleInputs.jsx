import React, { useState } from "react";

const MultipleInputs = () => {
  const [event, changeEvent] = useState({ isGoing: false, noG: 2 });
  const inputHandler = e => {
    e.target.type === "checkbox"
      ? changeEvent({ isGoing: e.target.checked, noG: event.noG })
      : changeEvent({ isGoing: event.isGoing, noG: e.target.value });
  };
  const formHandler = e => {
    e.preventDefault();
   console.log(event);
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="isGoing">
        <input
          type="checkbox"
          name="isGoing"
          id="isGoing"
          onChange={inputHandler}
        />
      </label>
      <label htmlFor="noG">
        <input
          type="number"
          name="noG"
          id="noG"
          onChange={inputHandler}
          value={event.noG}
        />
      </label>
      <input className="btn btn-success" type="submit" value="Submit Status" />
    </form>
  );
};

export default MultipleInputs;

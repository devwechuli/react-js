import React, { useState } from "react";

const Todo = props => {
  const inputState = useState("");

  const inputChangeHandler = e => {
    inputState[1](e.target.value);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        className="form-control"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={inputState[0]}
      />
      <button className="btn btn-info btn-lg mt-3">Add</button>
      <ul className="listgroup mt-3">
        <li className="list-item">A list item</li>
      </ul>
    </React.Fragment>
  );
};

export default Todo;

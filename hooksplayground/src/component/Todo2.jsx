import React, { useState } from "react";

const Todo2 = props => {
  //   const [todoName, setTodoName] = useState("");
  //   const [todoList, setTodoList] = useState([]);

  const [todoState, setTodoState] = useState({ userInput: "", todoList: [] });

  const inputChangeHandler = e => {
    setTodoState({ userInput: e.target.value, todoList: todoState.todoList });
  };
  const todoAddHandler = () => {
    setTodoState({
      userInput: todoState.userInput,
      todoList: todoState.todoList.concat(todoState.userInput)
    });
  };
  return (
    <React.Fragment>
      <input
        type="text"
        className="form-control"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoState.userInput}
      />
      <button onClick={todoAddHandler} className="btn btn-info btn-lg mt-3">
        Add
      </button>
      <ul className="listgroup mt-3">
        {todoState.todoList.map((todo, index) => {
          return (
            <li key={index} className="list-item">
              {todo}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo2;

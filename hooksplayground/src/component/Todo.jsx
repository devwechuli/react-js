import React, { useState, useEffect, useReducer,useme } from "react";
import axios from "axios";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
      case "REMOVE":
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };
  const [todoList,dispatch]=useReducer(todoListReducer, []);

  useEffect(() => {});
  const inputChangeHandler = e => {
    setTodoName(e.target.value);
  };
  const todoAddHandler = () => {
    // setTodoList(todoList.concat(todoName));
    axios
      .post("https://hooksproject-7e4ce.firebaseio.com/todos.json", {
        name: todoName
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

 

  useEffect(() => {
    const datarefresh = window.setInterval(() => {
      axios
        .get("https://hooksproject-7e4ce.firebaseio.com/todos.json", {
          name: todoName
        })
        .then(response => {
          console.log(response);
          const todoData = response.data;
          const todos = [];
          for (let key in todoData) {
            todos.push({ id: key, name: todoData[key].name });
          }
          setTodoList(todos);
        })
        .catch(error => console.log(error));
    }, 2000);

    return () => {
      console.log("Clean Up");
      window.clearInterval(datarefresh);
    };
  }, []);

  return (
    <React.Fragment>
      <input
        type="text"
        className="form-control"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button onClick={todoAddHandler} className="btn btn-info btn-lg mt-3">
        Add
      </button>
      <ul className="listgroup mt-3">
        {todoList.map((todo, index) => {
          return (
            <li key={index} className="list-item">
              {todo.name}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo;

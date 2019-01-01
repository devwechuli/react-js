import React from "react";

const Todos = props => {
  const { todos,deleteToDo } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={()=>deleteToDo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo items, yeah!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;

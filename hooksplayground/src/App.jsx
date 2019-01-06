import React, { useState } from "react";
import Todo from "./component/Todo";
import Header from "./component/Header";
import Auth from "./component/Auth";
import AuthContext from "./authContext";

const App = props => {
  const [pageName, pageFunction] = useState("todo"); //we are destructuring an array not an object
  const [authStatus, setAuth] = useState(false);
  const displayTodo = () => {
    pageFunction("todo");
  };
  const displayAuth = () => {
    pageFunction("auth");
  };

  const login = () => {
    setAuth(true);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authStatus, login }}>
        <Header onLoadTodos={displayTodo} onLoadAuth={displayAuth} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-6 ">
              <h2 className="mb-2">My To-do List with React Hooks</h2>
              {pageName === "todo" ? <Todo /> : <Auth />}
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default App;

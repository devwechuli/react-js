import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import AuthContext from "./context/AuthContext";

const App = props => {
  const [authStatus, setAuth] = useState(false);
  const [token, setToken] = useState("blah blah");
  const login = tokenString => {
    setAuth(true);
    setToken(tokenString);
  };
  const logout = () => {
    setAuth(false);
    setToken("");
  };
  console.log(authStatus);
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isAuthenticated: authStatus,
          token,
          login: tokenString => {
            login(tokenString);
          },
          logout
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default App;

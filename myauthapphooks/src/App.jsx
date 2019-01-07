import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import AuthContext from "./context/AuthContext";

const App = props => {
  const [authStatus, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = tokenString => {
    setAuth(true);
    setToken(tokenString);
  };
  const logout = () => {
    setAuth(false);
    setToken("");
    sessionStorage.clear();
  };
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken === null || storedToken === "") {
      setAuth(false);
      setToken("");
    } else {
      setAuth(true);
      setToken(storedToken);
    }
  }, []);

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isAuthenticated: authStatus,
          token,
          login,
          logout
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/" component={Home} />
        </Switch>
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default App;

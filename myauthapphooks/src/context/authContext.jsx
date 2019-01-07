import React from "react";

const AuthContext = React.createContext({
  isAuthenticated: false,
  token: "",
  login: () => {},
  logout: () => {}
});

export default AuthContext;

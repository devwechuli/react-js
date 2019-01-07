import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import AuthContext from "../context/AuthContext";

const SignIn = props => {
  const auth = useContext(AuthContext);
  const [formState, handler] = useState({ email: "", password: "" });
  const [errorMessage, errorMessageHandler] = useState("");
  const [successMsg, successMsgHandler] = useState("");
  console.log(props);

  // const auth
  const inputHandler = e => {
    if (e.target.id === "email") {
      handler({ email: e.target.value, password: formState.password });
    } else {
      handler({ email: formState.email, password: e.target.value });
    }
    errorMessageHandler("");
  };


  const formSubmitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/users/signin", formState)
      .then(response => {
        console.log(response);
        errorMessageHandler("");
        successMsgHandler(
          "You have successfully registered, redirecting to the sign in page"
        );
        const data = response.data.token;
        sessionStorage.setItem("token", data);
        console.log(data);

        auth.login(data);

        axios.defaults.headers.common["Authorization"] = data;
      })
      .catch(error => {
        errorMessageHandler("Wrong password or username");
        console.log(error);
      });
  };

  console.log(formState);

  return (
    <div className="container">
      <form onSubmit={formSubmitHandler} className="form-group col-6">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={inputHandler}
            className="form-control"
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={inputHandler}
            className="form-control"
            id="password"
            name="password"
            type="password"
          />
        </div>
        {errorMessage !== "" ? (
          <div className="alert alert-danger">{errorMessage}</div>
        ) : (
          <div className="alert alert-success">{successMsg}</div>
        )}
        <div>
          <button className="btn btn-primary mt-3">Sign In</button>
        </div>
      </form>
      {auth.isAuthenticated ? <Redirect to="/dashboard" /> : null} }
    
    </div>
  );
};

export default SignIn;

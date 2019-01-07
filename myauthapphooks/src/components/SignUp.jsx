import React, { useContext, useState } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

import AuthContext from "../context/AuthContext";

const SignUp = props => {
  const auth = useContext(AuthContext);
  const [formState, handler] = useState({ email: "", password: "" });
  const [errorMessage, errorMessageHandler] = useState("");
  const [successMsg, successMsgHandler] = useState("");

  // const auth
  const inputHandler = e => {
    if (e.target.id === "email") {
      handler({ email: e.target.value, password: formState.password });
    } else {
      handler({ email: formState.email, password: e.target.value });
    }
    errorMessageHandler("");
  };

  const formSubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/users/signup",
        formState
      );
      console.log(response);
      errorMessageHandler("");
      successMsgHandler(
        "You have successfully registered, redirecting to the sign in page"
      );

      auth.login(response.data.token);

      axios.defaults.headers.common["Authorization"] = response.data.token;
      sessionStorage.setItem("token", response.data.token);
    } catch (error) {
      errorMessageHandler("The user already exists");
      console.log(error);
    }
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
          <button className="btn btn-primary mt-3">Sign Up</button>
        </div>
      </form>
      {auth.isAuthenticated ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

export default SignUp;

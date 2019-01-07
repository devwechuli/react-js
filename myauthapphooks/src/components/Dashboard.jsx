import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Dashboard = props => {
  const auth = useContext(AuthContext);
 

  useEffect(() => {
    axios
      .get("http://localhost:8081/users/secret")
      .then(response =>
        console.log(response).catch(error => console.log(error))
      );
  }, []);
  return (
    <div className="container">
      {auth.isAuthenticated && auth.token !== ""
        ? (<div>Redirecting</div>, <Redirect to="/" />)
        : "You are not authenticated"}
      You are in the dashboard component
    </div>
  );
};

export default Dashboard;

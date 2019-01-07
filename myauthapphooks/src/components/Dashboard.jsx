import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Dashboard = props => {
  const auth = useContext(AuthContext);
  const [dashboardData, dashboardHandler] = useState("");
  console.log(props);
  console.log(auth)

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth.token;
    const myt = sessionStorage.getItem("token");
    if (auth.isAuthenticated) {
      console.log(myt);

      //console.log("This is the auth token", auth);

      axios
        .get("http://localhost:8081/users/secret")
        .then(response => {
          dashboardHandler(response.data.message);
        })
        .catch(error => console.log(error));
    }
  }, []);
  return (
    <div>
      {auth.isAuthenticated ? (
        <div className="container">
          You are in the dashboard component.
          {String(auth.token)}
          <p>
            Secret message : <b>{dashboardData}</b>
          </p>
        </div>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
};

export default Dashboard;

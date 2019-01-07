import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = props => {
  const auth = useContext(AuthContext);
  console.log(auth);
  if (localStorage.getItem("token")) {
    auth.login(localStorage.getItem("token"));
  }

  return (
    <div className="container">
      You are in the home component
      <p>
        {auth.token}
        {String(auth.isAuthenticated)}
      </p>
      <button onClick={() => auth.login("some more blah")}>Login</button>
      <button onClick={auth.logout}>Logout</button>
    </div>
  );
};

export default Home;

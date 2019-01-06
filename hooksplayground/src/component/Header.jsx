import React, { useContext } from "react";
import AuthContext from "../authContext";

const Header = props => {
  const auth = useContext(AuthContext);
  return (
    <header>
 
      <button onClick={props.onLoadTodos} className="btn">
        Todo List
      </button>

      {auth.status === false ? (
        <button onClick={props.onLoadAuth} className="btn">
          Auth
        </button>
      ) : (
        <button disabled onClick={props.onLoadAuth} className="btn">
          Auth
        </button>
      )}
    </header>
  );
};

export default Header;

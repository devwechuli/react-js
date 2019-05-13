import React from "react";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Default Props </h2>
        <p style={{ color: "pink", fontSize: "21px" }}>
          This is a lecture on default props
        </p>
        <Default />
        <Default firstname="Paul" lastname="Wechuli" />
      </div>
    </React.Fragment>
  );
}

export default App;

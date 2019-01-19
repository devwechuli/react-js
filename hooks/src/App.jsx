import React, { useState } from "react";
import Example from "./components/Example";

const App = () => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "8px" }} className="container content">
        <Example />
      </div>
    </React.Fragment>
  );
};

export default App;

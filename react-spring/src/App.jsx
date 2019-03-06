import React from "react";

import AnimatedDiv from "./components/AnimatedDiv";

const App = () => {
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <AnimatedDiv/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

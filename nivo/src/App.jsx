import React, { useState } from "react";
import Line from "./components/line/Line";
import Line2 from "./components/line/Line2";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/line2" component={Line2} />
        <Route path="/" exact component={Line} />
      </Switch>

      <Line />
    </React.Fragment>
  );
};

export default App;

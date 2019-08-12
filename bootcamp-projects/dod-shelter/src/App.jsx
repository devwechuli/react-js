import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import dogs from "./dogData";
import Dogs from "./components/Dogs";
import Dog from "./components/Dog";

function App(props) {

  return (
    <Fragment>
      <NavBar {...dogs} />

      <div className="container">
        <Switch>
          <Route exact path="/dogs" render={() => <Dogs {...dogs} />} />
          <Route exact path="/dogs/:dog" component={Dog} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;

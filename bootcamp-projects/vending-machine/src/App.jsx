import React from "react";
import { Switch, Route } from "react-router-dom";
import Food from "./components/Food";
import Error404 from "./components/Error404";
import FoodSearch from "./components/FoodSearch";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
<NavBar/>
      <Switch>
      <Route exact path="/" component={FoodSearch} />
        <Route
          exact
          path="/food/:name"
          render={routeProps => <Food {...routeProps} />}
        />
        {/* <Route exact path='/food/:name' component={Food}/> */}

        <Route exact path="/food/:name/drink/:drink/" component={Food} />

        {/* Add 404 error */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

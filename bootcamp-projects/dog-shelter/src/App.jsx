import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import dogs from "./dogData";
import Dogs from "./components/Dogs";
import DogDetail from './components/DogDetail';

class App extends Component {
  render() {

    const getDog = props =>{

    }
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={routerProps => <Dogs {...routerProps} dogs={dogs} />}
          />
          <Route exact path="/dogs/:name" render={()=><DogDetail/>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;

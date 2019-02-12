import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
// const Button = React.lazy(() => import("./components/Input")); //Using react lazy for code splitting

class App extends Component {
  state = {
    todo: ""
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <p>This seems to be working</p>
              <Input />
              <Button />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import NameForm from "./components/NameForm";
import TextArea from "./components/TextArea";
import SelectTag from "./components/SelectTag";
import MultipleInputs from "./components/MultipleInputs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">Forms Playground</div>
        <div className="container">
        <NameForm/>
        <TextArea/>
        <SelectTag/>
        <MultipleInputs/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

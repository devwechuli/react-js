import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    userInputC:'',
    wordlength: 0,
    charArrlist: []
  };

  deleteLetterHandler = letterIndex => {
    //const persons = this.state.persons.slice(); //Use slice without parameters to copy the whole array/object
    //or we can use the spreas operator as below, this updates the state in an immutable fashion
    const persons = [...this.state.charArrlist];
    persons.splice(letterIndex, 1);
    this.setState({ charArrlist: persons });
  };

  wordCounterHandler = e => {
    let userInput = e.target.value.length;
    let charStr = e.target.value;
    let charArr = charStr.split("");

    this.setState({ wordlength: userInput, charArrlist: charArr,userInputC:charStr });
  };

  render() {
    let words;
    if (this.state.wordlength < 6) {
      words = <div>The text is too short</div>;
    } else {
      words = <div>Text is long enough</div>;
    }
    return (
      <div className="App">
        <input type="text" onChange={this.wordCounterHandler} value={this.state.userInputC} />
        <p>{this.state.wordlength}</p>
        <p>{this.state.userInputC}</p>
        <ValidationComponent textlength={this.state.wordlength}>
          <p>{words}</p>
        </ValidationComponent>

        {this.state.charArrlist.map((letter,index) => (
          <CharComponent click={() => this.deleteLetterHandler(index)} letter={letter} />
        ))}
      </div>
    );
  }
}

export default App;

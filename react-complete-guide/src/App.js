import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:
    [
      {name:"Paul",age:25},
      {name:"Lavander", age:26},
      {name:"Joyce",age:36}
    ]
  }
 render() {
   
    return (
      <div className="App">
   
     <h1>Hi Am a React App</h1>
     <h1>Another Awesome heading</h1>
     <button></button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies:racing</Person>
      </div>
      
    ); 
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;

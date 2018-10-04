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
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
   // console.log('Was Clicked');
   // don't do this this.state.persons[0].name="Wechuli";
  this.setState({
    persons:[
    {name:newName,age:25},
    {name:"Lavander", age:46},
    {name:"Joyce",age:26}
  ]
})
  }
 render() {
   
    return (
      <div className="App">
   
     <h1>Hi Am a React App</h1>
     <h1>Another Awesome heading</h1>
     <button onClick={() => this.switchNameHandler('Paulo2')}>Switch Name</button>
     <Person 
     name={this.state.persons[0].name} 
     age={this.state.persons[0].age} />
     <Person 
     name={this.state.persons[1].name} 
     age={this.state.persons[1].age}/>
     <Person 
     name={this.state.persons[2].name} 
     age={this.state.persons[2].age} click={this.switchNameHandler.bind(this,'PAULO!!')}>Hobbies:racing
     </Person>
      </div>
      
    ); 
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;

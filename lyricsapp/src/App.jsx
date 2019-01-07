import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import {Route,Switch} from 'react-router-dom';
import Index from './components/layout/Index'

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <NavBar/>
       <div className="container">
       <Switch>
         <Route path='/' exact component={Index} />

       </Switch>       
       </div>
     </React.Fragment>
    );
  }
}

export default App;

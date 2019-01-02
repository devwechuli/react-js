import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route path="/" exact component={Home} yes={'this'}/>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/:post_id"  component={Post}/>
        </Switch>
     
      </React.Fragment>
    );
  }
}

export default App;

import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Dog from "./components/Dog";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* passing a prop in the component */}
        <Route exact path="/dog" component={() => <Dog name="muffins" />} />

        <Route exact path="/dog/r" render={() => <Dog name="muffins" />} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import Header from "../ui/Header";
import PostItem from "../components/PostItem";
import Life from "../components/Life";
import Conditional from "../components/Conditional";
import Pure from "../components/Pure";
import User from "../components/User";

class App extends Component {
  render() {
    //We can use switch instead of exact to route, put the specific routes at the top
    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/purecomponent" component={Pure} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/profile" component={Profile} />
          <Route path="/life" component={Life} />
          <Route path="/user" component={User} />
          <Route path="/" exact component={Home} />
          <Route render={() => <h3>Oops, 404 -Page Not Found</h3>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

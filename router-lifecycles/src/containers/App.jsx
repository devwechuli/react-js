import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import Header from "../ui/Header";
import PostItem from "../components/PostItem";

class App extends Component {
  render() {
    //We can use switch instead of exact to route, put the specific routes at the top
    return (
      <React.Fragment>
        <Header />

        <Switch>          
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

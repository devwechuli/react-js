import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />

          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

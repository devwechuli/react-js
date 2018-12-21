import React, { Component } from "react";
import Logo from './load.svg'

class Posts extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = posts.json();
    jsonData
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const postItems = this.state.posts.slice().map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <br />

        </div>
      );
    });
    return (
      <div>        
        <h1>Posts</h1>
        {this.state.posts.length >0 ?postItems:(<div><img src={Logo} alt="spinner"/></div>)}
      </div>
    );
  }
}

export default Posts;

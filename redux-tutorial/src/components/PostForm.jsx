import React, { Component } from "react";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title :this.state.title.slice(),
      body: this.state.body
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },body:JSON.stringify(post)
    }).then(data=>data.json()).then(data=>console.log(data))
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title</label> <br />
            <input
              onChange={event => this.onChange(event)}
              name="title"
              id="title"
              type="text"
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body</label> <br />
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={event => this.onChange(event)}
            />
          </div>
          <br />
          <br />
          <button onSubmit={event => this.onSubmit(event)} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;

import React, { Component } from "react";
// import axios from "axios";
import spinner from "../spinner.svg";
import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: []
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  //     console.log(response);
  //     this.setState({
  //       posts: response.data
  //     });
  //   });
  // }
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      <div>
        {posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <img src={pokeball} alt="a pokeball" />
              <div className="card-content">
                <Link to={`/${post.id}`}>
                  <span className="card-title">
                    <b>{post.title}</b>
                  </span>
                </Link>

                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="center">
        <img src={spinner} alt="No content yet" />
      </div>
    );
    return (
      <div className="home container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);

import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data.slice(0, 5) }); // first 5 posts
      })
  }

  render() {
    return (
      <div>
        <h2>Post Titles:</h2>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
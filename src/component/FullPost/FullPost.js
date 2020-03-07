import React, { Component } from "react";
import classes from "./FullPost.css";

import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get("/posts/" + this.props.id).then(response => {
          this.setState({ loadedPost: response.data });
          console.log(response);
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.state.id).then(response => {
      console.log(response);
    });
  };

  render() {
    let post = <p>please Select a Post!</p>;

    if (this.props.id) {
      post = <p>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <div>{this.state.loadedPost.title}</div>
          <div>{this.state.loadedPost.body}</div>
          <div className="Edit" onClick={this.deletePostHandler}>
            Delete
          </div>
        </div>
      );
    }
    return post;
  }
}
export default FullPost;

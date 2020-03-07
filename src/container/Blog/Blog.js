import React, { Component } from "react";

import Post from "../../component/Post/Post";
import FullPost from "../../component/FullPost/FullPost";
import NewPost from "../../component/NewPost/NewPost";
import classes from "./Blog.css";

import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    const posts = axios
      .get("posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
          return {
            ...post,
            author: "Rishabh"
          };
        });
        this.setState({ posts: updatePosts });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          ></Post>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId}></FullPost>
        </section>
        <section>
          <NewPost></NewPost>
        </section>
      </div>
    );
  }
}

export default Blog;

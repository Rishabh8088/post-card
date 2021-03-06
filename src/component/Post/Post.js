import React from "react";
import classes from "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>

    <div>
      <h1>{props.author}</h1>
    </div>
  </article>
);
export default post;

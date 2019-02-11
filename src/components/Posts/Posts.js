import React, { Component } from "react";
import placeHolderImage from "../../assets/image-placeholder.svg";
import PostCard from "../PostCard/PostCard";
import "./Posts.css";

const posts = [
  { title: "First title", description: "desc", image: placeHolderImage },
  { title: "Second title", description: "x", image: placeHolderImage },
  { title: "Third title", description: "y", image: placeHolderImage }
];

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    );
  }
}

export default Posts;

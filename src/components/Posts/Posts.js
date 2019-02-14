import React from "react";
import PostCard from "../PostCard/PostCard";
import "./Posts.css";

const Posts = ({ posts }) => (
  <div className="Posts">
    {posts.map((post, index) => (
      <PostCard
        key={index}
        title={post.title}
        username={post.username}
        image={post.media.path}
      />
    ))}
  </div>
);

export default Posts;

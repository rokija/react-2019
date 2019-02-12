import React, { Component } from "react";
import placeHolderImage from "../../assets/image-placeholder.svg";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const userList = [
  { title: "Jane", description: "girl", image: placeHolderImage },
  { title: "John", description: "dog walker", image: placeHolderImage },
  { title: "Name", description: "another", image: placeHolderImage },
  { title: "User", description: "unknown", image: placeHolderImage }
];

class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        {userList.map((user, index) => (
          <UserCard
            key={`userCard${index}`}
            image={user.image}
            title={user.title}
            description={user.description}
          />
        ))}
      </div>
    );
  }
}

export default UserList;

import React, { Component } from "react";
import placeHolderImage from "../../assets/image-placeholder.svg";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        {this.props.users &&
          this.props.users.map((user, index) => (
            <UserCard
              key={`userCard${index}`}
              image={user.image || placeHolderImage}
              username={user.username}
              email={user.email}
            />
          ))}
      </div>
    );
  }
}

export default UserList;

import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

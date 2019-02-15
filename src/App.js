import React, { Component } from "react";
import Posts from "./containers/PostsContainer";
import { Row, Container } from "reactstrap";
import UserList from "./containers/UserListContainer";
import Header from "./containers/HeaderContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </Row>
        </Container>
        {/* <PostModal /> */}
      </div>
    );
  }
}

export default App;

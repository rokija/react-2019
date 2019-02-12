import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import { Row, Container } from "reactstrap";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
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
      </div>
    );
  }
}

export default App;

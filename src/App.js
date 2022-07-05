import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToDoList } from "./pages/ToDoList";
import { NewTodoForm } from "./pages/NewTodoForm";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import ArticleList from "./pages/ArticleList";
import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <Container>
          <Row>
            <Col xs="3">
              <NewTodoForm></NewTodoForm>
            </Col>
            <Col xs="9">
              <ArticleList></ArticleList>
            </Col>
          </Row>
        </Container>
        <Route path="/" component={HomePage} exact />
      </div>
    </Router>
  );
}
export default App;

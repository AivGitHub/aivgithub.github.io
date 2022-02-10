import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";


export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container blog">
        <Container>
          <h1 className="text-center mt-5">Blog page</h1>
          <Outlet />
        </Container>
      </div>
    );
  }
}

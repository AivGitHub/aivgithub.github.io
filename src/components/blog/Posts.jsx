import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";


export default class Posts extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main-container posts">
        <Container>
          <NavLink to="/blog/this-is-a-post-title">
            <Row className="align-items-center my-5">
              <Col className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src=""
                  alt="Post image"
                />
              </Col>
              <Col className="col-lg-5">
                <h1 className="font-weight-light">Post title</h1>
                <p>
                  Post summary
                </p>
              </Col>
            </Row>
          </NavLink>
        </Container>
      </div>
    );
  }
}

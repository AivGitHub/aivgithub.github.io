import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";


export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main-container posts">
        <Container>
          <div>
            <Row className="align-items-center my-5">
              <Col className="col-lg-5">
                <h1 className="font-weight-light">Page not found (404)!</h1>
                <p>
                  Go back <NavLink to="/">Home</NavLink>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
  )};
}

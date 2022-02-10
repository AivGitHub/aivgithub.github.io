import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import {
  Container,
  Row,
  Col
} from "react-bootstrap";


export default class About extends Component {
  constructor(props) {
    super(props);

    var systemData = this.props.systemData;

    this.about = Object.keys(this.props.systemData).map(function(key, i) {
      return (
        <div key={key + "_" + i}>
          <h3>{key}: {systemData[key]}</h3>
        </div>
    )});
  }

  render() {

    return(
      <div className="main-container posts">
        <Container>
          <div>
            <Row className="justify-content-md-center">
              <Col className="col-md-auto content-background">
                {this.about}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
  )};
}

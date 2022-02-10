import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.data = props.jsonData;
    this.profileImage = 'images/' + this.data.profile_image;

    this.experiences = this.data.experiences.map(function(experience, i) {
      return <div key={"outer-home-map" + i}>
        <h3>{experience.name}</h3>
        <p className="info"><em className="date"> {experience.from} - {experience.to}</em></p>
        <h5>{experience.position}</h5>
          {experience.duties.map((duty, j) => {
            return (<li key={"inner-home-map-" + j}>{duty}</li>)
          })}
        </div>
    });
  }

  render() {
    return (
      <div className="main-container home">
        <Container>
            <Row>
              <Col>
                <div className="header-greetings">
                  <h1 className="font-size-44">Hello, I'm <span className="text-red">{this.data.name}</span></h1>
                  <p className="font-size-36">
                    {this.data.description}
                  </p>
                </div>
              </Col>
              <Col>
                <img
                  className="img-fluid rounded-circle"
                  src={this.profileImage}
                  alt="Profile image"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col>
                <h2>My working experience:</h2>
                {this.experiences}
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

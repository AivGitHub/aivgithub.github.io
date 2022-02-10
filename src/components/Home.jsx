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

    var experiencesLength = this.data.experiences.length;
    var borderBottom = "border-bottom-1";

    this.experiences = this.data.experiences.map(function(experience, i) {

      // TODO: Think about any other solutions
      if (i == experiencesLength - 1) {
        borderBottom = "";
      }

      return <div className={borderBottom} key={"outer-home-map" + i}>
        <h3 className="font-size-24">{experience.name}</h3>
        <p className="info"><em className="date"> {experience.from} - {experience.to}</em></p>
        <span className="font-size-18">{experience.position}</span>
          {experience.duties.map((duty, j) => {
            return (<li className="font-size-18" key={"inner-home-map-" + j}>{duty}</li>)
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
            <Row className="justify-content-md-center mt-5">
              <Col className="col-md-auto content-background">
                <h2 className="font-size-36">My working experience:</h2>
                {this.experiences}
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

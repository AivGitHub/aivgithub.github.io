import React, { Component } from "react";

import {
  Container,
  Row,
  Col
} from "react-bootstrap";


export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.contacts = props.contactsData.contacts.map(function(contact, i){
      return <div key={"outer-home-map" + i}>
        <h4>{contact.name}: {contact.value}</h4>
        </div>
      });

    this.socialNetworks = props.contactsData.socialNetworks;
  }

  render(){
    return (
      <div className="main-container contacts">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="col-md-auto content-background">
              <h1 className="font-weight-light">Contacts:</h1>
              {this.contacts}
              <h1 className="font-weight-light">Social Networks:</h1>
              {this.socialNetworks}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

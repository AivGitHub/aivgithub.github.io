import React, { Component } from "react";

import { Container } from "react-bootstrap";

import './Footer.css';


export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.brand = props.footerData.brand;
    this.version = props.footerData.version;

    this.socialNetworks = props.footerData.socialNetworks;
  }

  render() {
    return (
      <div className="footer">
        <footer className="py-1 bg-light fixed-bottom">
          <Container>
            <p className="m-0 text-center">
              {this.socialNetworks}
              <br />
              Copyright &copy; {this.brand} 2022.
              <br />
              Version: {this.version}
            </p>
          </Container>
        </footer>
      </div>
    );
  }
}

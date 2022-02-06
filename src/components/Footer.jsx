import React, { Component } from "react";

import './Footer.css';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.brand = props.brand;
    this.version = props.version;
  }

  render() {
    return (
      <div className="footer">
        <footer className="py-1 bg-light fixed-bottom">
          <div className="container">
            <p className="m-0 text-center">
              Copyright &copy; {this.brand} 2022. Version: {this.version}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

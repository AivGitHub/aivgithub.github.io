import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class About extends Component {
  constructor(props) {
    super(props);

    var systemData = this.props.systemData;
    this.about = '';


    if (systemData) {
      this.about = Object.keys(systemData).map(function(key, i) {
        return (
          <div className="border-bottom-3 fit-content" key={key + "_" + i}>
            <h3>{key}: {systemData[key]}</h3>
          </div>
      )});
    }
  }

  render() {

    return(
      <div className="main-container posts">
        <div className="container">
          <div>
            <div className="row align-items-center my-5">
              <div className="col-lg-5">
                {this.about}
              </div>
            </div>
          </div>
        </div>
      </div>
  )};
}

export default About;

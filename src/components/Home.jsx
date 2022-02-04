import React, { useState, useEffect, Component } from "react";

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.experience = '';
    this.data = props.jsonData;

    if (this.data && this.data.profile_image) {
      this.profileImage = 'images/' + this.data.profile_image;
    }

    if (this.data && this.data.experience){
      this.experience = this.data.experience.map(function(experience, i){
        return <div className="border-bottom-3" key={"outer-home-map" + i}>
          <h3>{experience.name}</h3>
          <p className="info"><em className="date"> {experience.from} - {experience.to}</em></p>
          <h5>{experience.position}</h5>
            {experience.duties.map((duty, j) => {
              return (<li key={"inner-home-map-" + j}>{duty}</li>)
            })}
          </div>
        });
      }
  }

  render() {
    return (
      <div className="main-container home">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={this.profileImage}
                alt="Profile image"
              />
            </div>
            <div className="col-lg-7">
              <h1 className="font-weight-light">Hello, I'm {this.data.name}</h1>
              <p>
                {this.data.description}
              </p>
              <h2 className="border-bottom-5 fit-content">My working experience:</h2>
              {this.experience}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

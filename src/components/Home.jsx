import React, { useState, useEffect } from "react";

import './Home.css';


function Home(props) {
  var experience = '';
  var data = props.jsonData;

  var profileImage = 'images/' + data.profile_image;

  if (data && data.experience){
    experience = data.experience.map(function(experience, i){
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

  return (
    <div className="main-container home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={profileImage}
              alt="Profile image"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light">Hello, I'm {data.name}</h1>
            <p>
                {data.description}
            </p>
            <h2 className="border-bottom-5 fit-content">My working experience:</h2>
            {experience}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

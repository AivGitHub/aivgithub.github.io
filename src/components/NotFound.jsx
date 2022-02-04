import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => (
    <div className="main-container posts">
      <div className="container">
        <div>
          <div className="row align-items-center my-5">
            <div className="col-lg-5">
              <h1 className="font-weight-light">Page not found (404)!</h1>
              <p>
                Go back <NavLink to="/">Home</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default NotFound;

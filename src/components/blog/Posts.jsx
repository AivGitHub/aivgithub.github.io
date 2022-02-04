import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Posts extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main-container posts">
        <div className="container">
          <NavLink to="/blog/this-is-a-post-title">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src=""
                  alt="Post image"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">Post title</h1>
                <p>
                  Post summary
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Posts;

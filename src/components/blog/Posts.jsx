import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="main-container posts">
      <div className="container">
        <Link to="/blog/this-is-a-post-title">
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
        </Link>
      </div>
    </div>
  );
}

export default Posts;
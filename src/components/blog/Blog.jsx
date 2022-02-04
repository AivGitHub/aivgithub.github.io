import React, { Component } from "react";
import { Outlet } from "react-router-dom";


class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container blog">
        <div className="container">
          <h1 className="text-center mt-5">Blog page</h1>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Blog;

import React, { useEffect, Component } from "react";
import { withRouter, useParams } from "react-router";


// Dirty hack. Again
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Post extends Component {
  constructor(props) {
    super(props);

    this.slug = props.params.slug;
  }

  render() {
    return (
      <div className="main-container post">
        <div className="container">
          <h1 className="mt-5">Post Title</h1>
          <h6 className="mb-5">The post slug is, {this.slug}</h6>
          <p>
            Full post content
          </p>
        </div>
      </div>
    );
  }
}

export default withParams(Post);

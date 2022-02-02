import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
  }, [postSlug]);

  return (
    <div className="main-container post">
      <div className="container">
        <h1 className="mt-5">Post Title</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
          Full post content
        </p>
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  document.title = "Jadur Jini";

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h2 className="m-4">Sorry! This page is not available.</h2>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Error;

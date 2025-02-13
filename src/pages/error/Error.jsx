import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error">
        <div className="container">
          <div className="error-link">
            <Link to="/">Home /</Link> 404 Error
          </div>
          <div className="error-block">
            <h1>404 Not Found</h1>
            <h5>Your visited page not found. You may go home page.</h5>
            <Link to="/">
              <button className="error-btn">Back to home page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

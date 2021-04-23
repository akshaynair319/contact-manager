import React from "react";
import "./MainContent.css";

import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div className="container-mainContent">
      <div className="call-to-action">
        <p className="text-center">
          send emails to your friends and co-workers effortlessly, Create and
          schedule meetings like never before
        </p>
      </div>
      <div className="button-container">
        <Link to="signUp">
          <Button outline color="primary" size="lg" className="user-login">
            SignUp
          </Button>
        </Link>

        <Link to="login">
          <Button outline color="primary" size="lg" className="user-login">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainContent;

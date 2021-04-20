import React from "react";
import "./MainContent.css";

import { Button } from "reactstrap";

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
        <Button outline color="primary" size="lg" className="user-login">
          signIN
        </Button>
        <Button outline color="success" size="lg" className="user-login">
          login
        </Button>
      </div>
    </div>
  );
}

export default MainContent;

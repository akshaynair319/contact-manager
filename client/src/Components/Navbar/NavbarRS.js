import React from "react";
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavbarRS() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <Link to="/" className="link">
            EmailMe
          </Link>
        </NavbarBrand>
        <Collapse navbar></Collapse>
        <NavItem>
          <NavLink>
            <Link to="signUp" className="link">
              SignIn
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="login" className="link">
              Login
            </Link>
          </NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default NavbarRS;

import React from "react";
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import "./Navbar.css";
function NavbarRS() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">emailMe</NavbarBrand>
        <Collapse navbar></Collapse>
        <NavItem>
          <NavLink href="/signIn/">SignIn</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Login/">Login</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default NavbarRS;

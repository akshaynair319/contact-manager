import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const UserNavbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">EmailMe</NavbarBrand>
        <Collapse navbar></Collapse>
        <NavbarText>Welcome User</NavbarText>
        <NavItem>
          <NavLink href="/components/">Logout</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default UserNavbar;

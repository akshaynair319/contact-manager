import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
const UserNavbar = ({ userName, logout }) => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">EmailMe</NavbarBrand>
        <Collapse navbar></Collapse>
        <NavbarText>Welcome {userName}</NavbarText>
        <NavItem>
          <NavLink>
            <Link to="/" onClick={() => logout()}>
              Logout
            </Link>
          </NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default connect(null, { logout })(UserNavbar);

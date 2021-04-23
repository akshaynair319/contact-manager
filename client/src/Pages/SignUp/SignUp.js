import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";

import NavbarRS from "./../../Components/Navbar/NavbarRS";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "./../../actions/userActions";
import UserPage from "../UserPage/UserPage";
const SignUp = ({ register, isAuthorised, errorMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    register(name, email, password);
  };

  console.log("error message: ", errorMessage);
  if (isAuthorised) {
    return <UserPage />;
  }
  return (
    <div className="form">
      <NavbarRS />
      <Form className="login-form">
        {errorMessage ? <Alert color="danger">{errorMessage}</Alert> : null}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>SignUp</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorised: state.user.isAuthorised,
  errorMessage: state.user.msg.msg,
});
export default connect(mapStateToProps, { register })(SignUp);

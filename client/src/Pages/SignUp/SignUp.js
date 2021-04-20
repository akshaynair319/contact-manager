import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import NavbarRS from "./../../Components/Navbar/NavbarRS";
import "./SignUp.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form">
      <NavbarRS />
      <Form className="login-form">
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
        <Button>SignUp</Button>
      </Form>
    </div>
  );
};

export default SignUp;

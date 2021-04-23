import React from "react";
import "./Contact.css";
import { deleteContact } from "./../../actions/userActions";
import { connect } from "react-redux";
function Contact({ name, email, id, deleteContact }) {
  return (
    <div className="contact">
      <div className="contact-image">
        <img
          src="https://avatars.githubusercontent.com/u/42649713?v=4"
          alt={name}
        />
      </div>
      <div className="contact-content">
        <h3>{name}</h3>
        <h5>{email}</h5>
      </div>
      <i class="fas fa-times fa-2x" onClick={() => deleteContact(id)}></i>
    </div>
  );
}

export default connect(null, { deleteContact })(Contact);

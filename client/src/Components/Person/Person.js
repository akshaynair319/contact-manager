import React from "react";
import { connect } from "react-redux";
import "./Person.css";
import { deleteContact } from "./../../actions/contactActions";

function Person({ name, email, image, _id, deleteContact }) {
  return (
    <div className="person">
      <img
        src="https://avatars.githubusercontent.com/u/42649713?v=4"
        alt={name}
        className="contact-img"
      />
      <div className="details">
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
      <button className="delete" onClick={() => deleteContact(_id)}>
        Delete Contact
      </button>
    </div>
  );
}

export default connect(null, { deleteContact })(Person);

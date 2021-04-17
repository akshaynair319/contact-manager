import React, { useState } from "react";
import "./AddUser.css";
import { addContact } from "./../../actions/contactActions";
import { connect } from "react-redux";

function AddUser({ addContact }) {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const addNewUser = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, email, image);
    closeModal();
  };

  const closeModal = () => {
    setModal(false);
    setName("");
    setEmail("");
    setImage("");
  };
  return (
    <div className="addNewUser">
      <button className="btn" onClick={addNewUser}>
        Add new Contact
      </button>
      {modal && (
        <div className="modal">
          <div className="modal-header">Add new Contact</div>
          <div className="modal-body">
            <form action="post" onSubmit={handleSubmit}>
              <div className="form-input">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-input">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-input">
                <label>Image</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="submit">
                  Create new User
                </button>
                <button className="close" onClick={closeModal}>
                  close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(null, { addContact })(AddUser);

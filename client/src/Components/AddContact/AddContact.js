import React, { useState } from "react";
import "./AddContact.css";
import { addContact } from "../../actions/userActions";
import { connect } from "react-redux";

function AddContact({ addContact }) {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addNewContact = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, email);
    closeModal();
  };

  const closeModal = () => {
    setModal(false);
    setName("");
    setEmail("");
  };
  return (
    <div className="addNewContact">
      <button className="btn" onClick={addNewContact}>
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

              <div className="buttons">
                <button type="submit" className="submit">
                  Create new Contact
                </button>
                <button className="closeModal" onClick={closeModal}>
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

export default connect(null, { addContact })(AddContact);

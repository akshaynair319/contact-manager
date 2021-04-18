import React, { useEffect } from "react";
import { connect } from "react-redux";
import Person from "./../Person/Person";
import { getContacts } from "./../../actions/contactActions";
import "./Persons.css";
function Persons({ getContacts, contact }) {
  const contacts = contact.contacts;
  console.log(contacts);

  //takes intro data from database
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className="contacts">
      {contacts.map((person) => (
        <Person key={person._id} {...person} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});
export default connect(mapStateToProps, { getContacts })(Persons);

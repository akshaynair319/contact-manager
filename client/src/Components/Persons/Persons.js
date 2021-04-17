import React, { useEffect } from "react";
import { connect } from "react-redux";
import Person from "./../Person/Person";
import { getContacts } from "./../../actions/contactActions";

function Persons({ getContacts, contact }) {
  const contacts = contact.contacts;
  console.log(contacts);

  //takes intro data from database
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div>
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

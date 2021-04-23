import React, { useEffect } from "react";
import UserNavbar from "./../../Components/UserNavbar/UserNavbar";
import Contact from "./../../Components/Contact/Contact";
import AddContact from "./../../Components/AddContact/AddContact";
import "./UserPage.css";
import { connect } from "react-redux";

function UserPage({ contacts, userName }) {
  return (
    <div className="user">
      <UserNavbar userName={userName} />
      <AddContact />
      <div className="container">
        <div className="user-title">Your Contacts</div>
        <div className="user-contacts">
          {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: state.user.user_name,
  contacts: state.user.contacts,
});
export default connect(mapStateToProps, null)(UserPage);

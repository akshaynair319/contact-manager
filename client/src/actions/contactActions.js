import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./../actions/types";
import axios from "axios";

export const getContacts = () => (dispatch) => {
  axios.get("/api/contacts").then((res) =>
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    })
  );
};

export const addContact = (name, email, image) => (dispatch) => {
  axios.post("/api/contacts", { name, email, image }).then((res) => {
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  });
};

export const deleteContact = (id) => (dispatch) => {
  axios.delete(`/api/contacts/${id}`).then((res) =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    })
  );
};

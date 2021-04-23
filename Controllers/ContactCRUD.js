import User from "../models/User.js";
import { v4 as uuidv4 } from "uuid";

export const getContacts = (req, res) => {
  User.findById(req.user.id)
    .then((user) => res.status(200).json(user.contacts))
    .catch((err) => res.status(400).json({ msg: "there was an error" }));
};

export const addContact = (req, res) => {
  const { name, email } = req.body;
  const id = uuidv4();

  const newContact = { id, name, email };

  User.findById(req.user.id).then((user) => {
    user.contacts = [newContact, ...user.contacts];
    user.save();
  });

  res.status(201).json(newContact);
};

export const deleteContact = (req, res) => {
  //getting id of element to be deleted
  const id = req.params.id;

  //deleting item
  User.findById(req.user.id).then((user) => {
    user.contacts = user.contacts.filter((contact) => contact.id !== id);
    user.save();
  });

  res.status(200).json({ msg: "contact deleted" });
};

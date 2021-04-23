import express from "express";
const router = express.Router();

//getting authentication middleware
import auth from "./../../middleware/auth.js";

//getting all controller function
import {
  getContacts,
  addContact,
  deleteContact,
} from "../../Controllers/ContactCRUD.js";

//setting up private routes only accessible to user logged in

//  @route  GET api/users/contacts
//  @desc   get users contacts
//  @access Private
router.get("/", auth, getContacts);

//  @route  POST api/users/contacts
//  @desc   create a new contact
//  @access Private
router.post("/", auth, addContact);

//  @route  DELETE api/users/contacts
//  @desc   delete a contact
//  @access Private
router.delete("/:id", auth, deleteContact);

export default router;

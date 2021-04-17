import express from "express";
const router = express.Router();

//getting all controller function
import { getContacts } from "../../Controllers/Contacts.js";
import { addContact } from "../../Controllers/Contacts.js";
import { deleteContact } from "../../Controllers/Contacts.js";

//setting up routes

//  @route  GET api/items
//  @desc   Get all items
//  @access Public
router.get("/", getContacts);

//  @route  POST api/items
//  @desc   create an item
//  @access Public
router.post("/", addContact);

//  @route  DELETE api/items/:id
//  @desc   delete an item
//  @access Public
router.delete("/:id", deleteContact);

export default router;

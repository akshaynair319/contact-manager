import express from "express";
const router = express.Router();

//getting all controller function
import { addUser } from "../../Controllers/UserCRUD.js";

//setting up routes

//  @route  POST api/users
//  @desc   create an user
//  @access Public
router.post("/", addUser);

export default router;

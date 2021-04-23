import express from "express";
const router = express.Router();

//getting all controller function
import { userAuth } from "../../Controllers/UserAuth.js";
import User from "../../models/User.js";

//getting auth middleware
import auth from "./../../middleware/auth.js";
//setting up routes

//  @route  POST api/userAuth
//  @desc   authenticate an user
//  @access Public
router.post("/", userAuth);

//  @route  GET api/userAuth/user
//  @desc   getting user data
//  @access Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

export default router;

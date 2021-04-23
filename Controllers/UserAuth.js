import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtSecret from "./../config/jwtSecretToken.js";

export const userAuth = (req, res) => {
  const { email, password } = req.body;

  //check if all fields were filled
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .json({ msg: "email id or password are incorrect" });
    }

    //validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res
          .status(400)
          .json({ msg: "email id or password are incorrect" });
      }

      jwt.sign(
        { id: user._id },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              contacts: user.contacts,
            },
          });
        }
      );
    });
  });
};

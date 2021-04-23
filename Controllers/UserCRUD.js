import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtSecret from "./../config/jwtSecretToken.js";

export const addUser = (req, res) => {
  const { name, email, password } = req.body;

  //check if all fields were filled
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exists, please login" });
    }

    //create the user
    const newUser = new User({
      name,
      email,
      password,
      contacts: [],
    });

    //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;

        newUser.save().then((user) => {
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
    });
  });
};

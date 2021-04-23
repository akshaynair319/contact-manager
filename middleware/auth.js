import jwt from "jsonwebtoken";
import jwtSecret from "./../config/jwtSecretToken.js";

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) {
    //not authorised
    res.status(401).json({ msg: "no token authorisation denied" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, jwtSecret);

    //add user from payload
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "token is not valid" });
  }
};

export default auth;

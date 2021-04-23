import express from "express";
import path from "path";
import mongoose from "mongoose";

import users from "./routes/api/users.js";
import userAuth from "./routes/api/userAuth.js";
import contacts from "./routes/api/contacts.js";

const app = express();

//bosy-parser middleware
app.use(express.json());

//db config
import db from "./config/keys.js";

//connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

//use routes: register user './routes/api/users'
app.use("/api/users", users);

//use routes: login user './routes/api/userAuth'
app.use("/api/userAuth", userAuth);

//use routes: CRUD contacts './routes/api/contacts'
app.use("/api/users/contacts", contacts);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
//initialising port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

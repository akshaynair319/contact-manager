import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";

import contacts from "./routes/api/contacts.js";
const app = express();

//bosy-parser middleware
app.use(bodyParser.json());

//db config
import db from "./config/keys.js";

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

//use routes: redirecting all requests to './routes/api'
app.use("/api/contacts", contacts);

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

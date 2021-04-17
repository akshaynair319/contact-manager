import mongoose from "mongoose";

const Schema = mongoose.Schema;

//creating schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contact", ContactSchema);

export default Contact;

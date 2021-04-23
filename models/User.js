import mongoose from "mongoose";

const Schema = mongoose.Schema;

//creating schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: {
    type: Array,
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;

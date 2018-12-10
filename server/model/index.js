import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: String,
  link: String,
  icon: String
});

const userSchema = new Schema({
  name: String,
  email: String,
  pwd: String
});

const Models = {
  User: mongoose.model("User", userSchema),
  Menu: mongoose.model("Menu", menuSchema)
};

export default Models;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nick: {
    type: String,
    required: true,
    unique: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };

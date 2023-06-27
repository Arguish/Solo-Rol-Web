const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  content: {
    type: String,
  },
});

const Msg = mongoose.model("Msg", msgSchema);

module.exports = { Msg, msgSchema };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  state: {
    type: Boolean,
    default: false,
  },
  doneBy: {
    type: mongoose.ObjectId,
  },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = { ToDo, ToDoSchema };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { msgSchema } = require("./msg.model");

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
  coments: {
    type: [String],
  },
  createdBy: {
    type: String,
  },
  doneBy: {
    type: String,
  },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = { ToDo, ToDoSchema };

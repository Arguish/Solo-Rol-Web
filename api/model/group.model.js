const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { userSchema } = require("./user.model");
const { msgSchema } = require("./msg.model");
const { ToDoSchema } = require("./todo.model");

const GroupSchema = new Schema({
  participant: {
    type: [userSchema],
    required: true,
  },
  chat: {
    type: [msgSchema],
  },
  todos: {
    type: [ToDoSchema],
  },
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = { Group };

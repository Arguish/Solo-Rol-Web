const { ToDo } = require("../model/todo.model");

const createToDo = async (req, res) => {
  const result = await ToDo.create(req.body);
  res.send(result);
};
const getToDoByID = async (req, res) => {
  const result = await ToDo.findOne({ _id: req.params.id });
  res.send(result);
};
const getToDos = async (req, res) => {
  const result = await ToDo.find({});
  res.send(result);
};
const updateToDoByID = async (req, res) => {
  const result = await ToDo.updateOne({ _id: req.params.id }, req.body);
  res.send(result);
};
const deleteToDoByID = async (req, res) => {
  const result = await ToDo.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = {
  createToDo,
  getToDoByID,
  updateToDoByID,
  deleteToDoByID,
  getToDos,
};

const { ToDo } = require("../model/todo.model");

const createToDo = async (req, res) => {
  try {
    const result = await ToDo.create(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const getToDoByID = async (req, res) => {
  try {
    const result = await ToDo.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const getToDos = async (req, res) => {
  try {
    const result = await ToDo.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const updateToDoByID = async (req, res) => {
  try {
    const result = await ToDo.updateOne({ _id: req.params.id }, req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const deleteToDoByID = async (req, res) => {
  try {
    const result = await ToDo.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createToDo,
  getToDoByID,
  updateToDoByID,
  deleteToDoByID,
  getToDos,
};

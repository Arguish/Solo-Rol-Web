const { User } = require("../model/user.model");

const createUser = async (req, res) => {
  const result = await User.create(req.body);
  res.send(result);
};
const getUserByID = async (req, res) => {
  const result = await User.findOne({ _id: req.params.id });
  res.send(result);
};
const getUsers = async (req, res) => {
  const result = await User.find({});
  res.send(result);
};
const updateUserByID = async (req, res) => {
  const result = await User.updateOne({ _id: req.params.id }, req.body);
  res.send(result);
};
const deleteUserByID = async (req, res) => {
  const result = await User.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = {
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getUsers,
};

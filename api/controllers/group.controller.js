const { Group } = require("../model/group.model");

const createGroup = async (req, res) => {
  const result = await Group.create(req.body);
  res.send(result);
};

const getGroupByID = async (req, res) => {
  const result = await Group.findOne({ _id: req.params.id });
  res.send(result);
};
const getGroups = async (req, res) => {
  const result = await Group.find({});
  res.send(result);
};
const updateGroupByID = async (req, res) => {
  const result = await Group.updateOne({ _id: req.params.id }, req.body);
  res.send(result);
};
const deleteGroupByID = async (req, res) => {
  const result = await Group.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = {
  createGroup,
  getGroupByID,
  updateGroupByID,
  deleteGroupByID,
  getGroups,
};

const { Group } = require("../model/group.model");

const createGroup = async (req, res) => {
  try {
    const result = await Group.create(req.body);
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const getGroupByID = async (req, res) => {
  try {
    const result = await Group.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const getUserGroups = async (req, res) => {
  try {
    const result = await Group.find({});

    console.log(result);
    const resFilt = result.filter((elem) => {
      console.log(elem.participant, req.body._id);
      return elem.participant.includes(req.body._id);
    });
    console.log(resFilt);
    res.send(resFilt);
  } catch (error) {
    console.log(error);
    res.send("No groups founded");
  }
};
const updateGroupByID = async (req, res) => {
  try {
    const result = await Group.updateOne({ _id: req.params.id }, req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const deleteGroupByID = async (req, res) => {
  try {
    const result = await Group.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createGroup,
  getGroupByID,
  updateGroupByID,
  deleteGroupByID,
  getUserGroups,
};

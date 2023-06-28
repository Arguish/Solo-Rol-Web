const { Msg } = require("../model/msg.model.js");

const createMsg = async (req, res) => {
  try {
    const result = await Msg.create(req.body.data);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const getMsgByID = async (req, res) => {
  try {
    const result = await Msg.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const getMsgs = async (req, res) => {
  try {
    const result = await Msg.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const updateMsgByID = async (req, res) => {
  try {
    const result = await Msg.updateOne({ _id: req.params.id }, req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const deleteMsgByID = async (req, res) => {
  try {
    const result = await Msg.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createMsg,
  getMsgByID,
  updateMsgByID,
  deleteMsgByID,
  getMsgs,
};

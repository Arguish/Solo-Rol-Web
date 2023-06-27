const { Msg } = require("../model/msg.model.js");

const createMsg = async (req, res) => {
  const result = await Msg.create(req.body.data);
  res.send(result);
};
const getMsgByID = async (req, res) => {
  const result = await Msg.findOne({ _id: req.params.id });
  res.send(result);
};
const getMsgs = async (req, res) => {
  const result = await Msg.find({});
  res.send(result);
};
const updateMsgByID = async (req, res) => {
  const result = await Msg.updateOne({ _id: req.params.id }, req.body);
  res.send(result);
};
const deleteMsgByID = async (req, res) => {
  const result = await Msg.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = {
  createMsg,
  getMsgByID,
  updateMsgByID,
  deleteMsgByID,
  getMsgs,
};

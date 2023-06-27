const router = require("express").Router();
//CRUD

const {
  createMsg,
  getMsgByID,
  updateMsgByID,
  deleteMsgByID,
  getMsgs,
} = require("../controllers/msg.controller");

//Create
router.post("/add", createMsg);

//Read
router.get("/all", getMsgs);
router.get("/:id", getMsgByID);

//Update
router.put("/:id", updateMsgByID);

//Delete
router.delete("/:id", deleteMsgByID);

module.exports = router;

const router = require("express").Router();
//CRUD

const {
  createGroup,
  getGroupByID,
  updateGroupByID,
  deleteGroupByID,
  getUserGroups,
} = require("../controllers/group.controller");

//Create
router.post("/add", createGroup);

//Read
router.post("/user", getUserGroups);
router.get("/:id", getGroupByID);

//Update
router.put("/:id", updateGroupByID);

//Delete
router.delete("/:id", deleteGroupByID);

module.exports = router;

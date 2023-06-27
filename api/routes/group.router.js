const router = require("express").Router();
//CRUD

const {
  createGroup,
  getGroupByID,
  updateGroupByID,
  deleteGroupByID,
  getGroups,
} = require("../controllers/group.controller");

//Create
router.post("/add", createGroup);

//Read
router.get("/all", getGroups);
router.get("/:id", getGroupByID);

//Update
router.put("/:id", updateGroupByID);

//Delete
router.delete("/:id", deleteGroupByID);

module.exports = router;

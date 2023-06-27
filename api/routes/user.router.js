const router = require("express").Router();
//CRUD

const {
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getUsers,
  logUser,
} = require("../controllers/user.controller");

router.post("/loggin", logUser);

//Create
router.post("/add", createUser);

//Read
router.get("/all", getUsers);
router.get("/:id", getUserByID);

//Update
router.put("/:id", updateUserByID);

//Delete
router.delete("/:id", deleteUserByID);

module.exports = router;

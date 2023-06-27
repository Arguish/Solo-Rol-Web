const router = require("express").Router();
//CRUD

const {
  createToDo,
  getToDoByID,
  updateToDoByID,
  deleteToDoByID,
  getToDos,
} = require("../controllers/todo.controller");

//Create
router.post("/add", createToDo);

//Read
router.get("/all", getToDos);
router.get("/:id", getToDoByID);

//Update
router.put("/:id", updateToDoByID);

//Delete
router.delete("/:id", deleteToDoByID);

module.exports = router;

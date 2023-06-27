const express = require("express");
const router = express.Router();

router.use("/user", require("./user.router"));
router.use("/msg", require("./msg.router"));
router.use("/todo", require("./todo.router"));
router.use("/group", require("./group.router"));

router.get("/", (req, res) => {
  res.send("REQ OK : API ONLINE");
});

module.exports = router;

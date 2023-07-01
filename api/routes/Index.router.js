const express = require("express");
const router = express.Router();

router.use("/user", require("./user.router"));

router.get("/", (req, res) => {
  res.send("REQ OK : API ONLINE");
});

module.exports = router;

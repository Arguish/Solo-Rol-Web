require("dotenv").config();
const { checkConnection } = require("./api/db/dbIndex");
const express = require("express");
const morgan = require("morgan");

async function startDB() {
  await checkConnection();
}

function startExpress() {
  const api = express()
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes/Index.router.js"))
    .listen(process.env.PORTAPI, () => {
      console.log(`LISTEN OK ^-^ :${process.env.PORTAPI}`);
    });
}
async function start() {
  await startDB();
  startExpress();
}

start();
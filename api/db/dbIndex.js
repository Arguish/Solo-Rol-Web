const mongoose = require("mongoose");

let db;

const checkConnection = async () => {
  if (!db) {
    db = await mongoose.connect(process.env.MONGURI);
  }
  console.log(
    `Conectet to "${db.connection.name}" on port ${db.connection.port}`
  );
  return db;
};

module.exports = { checkConnection };

const mongoose = require("mongoose");

let db;

const checkConnection = async () => {
  if (!db) {
    db = await mongoose.connect(
      "mongodb+srv://Admin:Admin@cluster0.c09jwda.mongodb.net/todoteams?retryWrites=true&w=majority"
    );
  }
  console.log(
    `Conectet to "${db.connection.name}" on port ${db.connection.port}`
  );
  return db;
};

module.exports = { checkConnection };

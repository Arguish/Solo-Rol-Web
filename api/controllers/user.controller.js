const bcrypt = require("bcrypt");

const { User } = require("../model/user.model");

const createUser = async (req, res) => {
  try {
    console.log(req.body.nick);
    const nickUsed = await User.find({ nick: req.body.nick });
    const mailUsed = await User.find({ mail: req.body.mail });
    console.log(nickUsed, mailUsed);
    if (mailUsed.length > 0) {
      res.send("mail en uso");
    } else if (nickUsed.length > 0) {
      res.send("nick en uso");
    } else {
      req.body.pass = bcrypt.hashSync(req.body.pass, 10);
      const result = await User.create(req.body);
      res.send("Registro correcto");
    }
  } catch (error) {
    res.send(error);
  }
};

const logUser = async (req, res) => {
  try {
    const userLogged = await User.find({ mail: req.body.mail });
    console.log(userLogged);
    if (userLogged.length === 0) {
      return res.json({ msg: "mail incorrecto", response: userLogged });
    }
    bcrypt.compare(req.body.pass, userLogged.pass, (err, result) => {
      if (!result) {
        return res.send("Email or password invalid");
      } else {
        return res.send("Log ok?");
      }
    });
  } catch (error) {
    return res.send(error);
  }
};

const getUserByID = async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
};
const getUsers = async (req, res) => {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const updateUserByID = async (req, res) => {
  try {
    const result = await User.updateOne({ _id: req.params.id }, req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const deleteUserByID = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getUsers,
  logUser,
};

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
    if (userLogged.length === 0) {
      res.json({ msg: "mail incorrecto", response: userLogged });
    } else {
      res.send("El mail existe");
      /* bcrypt.compareSync(req.body.pass, userLogged.pass, (err, same) => {
        if (!same) {
          res.json({ msg: "Email or password invalid", error: err });
        } else {
          res.json({ msg: "Log ok", result: userLogged });
        }
      }); */
    }
  } catch (error) {
    res.send(error);
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

const User = require('../models/userModel');

async function createUser(req, res) {
  const newUser = await User.create(req.body);
  return res.send(newUser);
}
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createUser,
  getUsers,
};

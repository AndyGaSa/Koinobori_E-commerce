const User = require('../models/usersModel');

async function getUsers({ query }, res) {
  const users = await User.find(query);

  try {
    res.json(users);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function createUser(req, res) {
  const newUser = await User.create(req.body);
  res.send(newUser);
}

async function updateUser({ params }, res) {
  const user = await User.findById(params);

  try {
    res.json(user);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
module.exports = {
  getUsers,
  createUser,
  updateUser
};

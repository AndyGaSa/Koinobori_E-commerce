const User = require('../models/usersModel');

async function getUsers({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateUser({ params: { userId } }, res) {
  const user = await User.findById(userId);

  try {
    res.json(user);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function getOneUser({ params }, res) {
  const users = await User.findById(params);

  try {
    res.json(users);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

async function deleteUser({ params }, res) {
  const user = await User.findByIdAndDelete(params);

  try {
    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}
module.exports = {
  getUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
};

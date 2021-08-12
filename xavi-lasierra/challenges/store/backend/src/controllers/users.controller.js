const User = require('../models/user.model');

async function getUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query);

    return res.json(foundUsers);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);

    res.status(201);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function getOneUserById(req, res) {
  res.send('a');
}

function updateUserById(req, res) {
  res.send('a');
}

async function deleteUserById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getUsers,
  createUser,
  getOneUserById,
  updateUserById,
  deleteUserById
};

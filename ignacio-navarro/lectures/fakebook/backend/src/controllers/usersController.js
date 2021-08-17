const User = require('../models/userModel');

async function postUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAllUsers({ query }, res) {
  try {
    const allUsers = await User.find(query);
    res.json(allUsers);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
}

module.exports = {
  postUser,
  getAllUsers,
};

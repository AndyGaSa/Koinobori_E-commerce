const debug = require('debug')('tasks:controller');
const Users = require('../models/usersModel');

const getUsers = async ({ query }, res) => {
  const allUsers = await Users.find(query);
  res.send(allUsers);
};

const postUsers = async (req, res) => {
  debug(req.body);
  const newUser = await Users.create(req.body);
  res.send(newUser);
};

const deleteUser = async ({ params: { userId } }, res) => {
  const deletedUser = await Users.findByIdAndDelete(userId);
  res.send(deletedUser);
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;
  const updatedUser = await Users.findByIdAndUpdate(userId, body, { new: true });
  res.send(updatedUser);
};

module.exports = {
  getUsers,
  postUsers,
  deleteUser,
  updateUser
};

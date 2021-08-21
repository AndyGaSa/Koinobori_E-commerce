const Users = require('../models/userModel');

const getUsers = async ({ query }, res) => {
  try {
    const allUsers = await Users.find(query);
    res.send(allUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const postUsers = async ({ body }, res) => {
  try {
    const newUser = await Users.create(body);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUser = async ({ params: { userId } }, res) => {
  try {
    const newUser = await Users.findById(userId);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteUser = async ({ params: { userId } }, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(userId);
    res.status(204);
    res.send(deletedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    const updatedUser = await Users.findByIdAndUpdate(userId, body, { new: true });
    res.send(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  getUsers,
  postUsers,
  getUser,
  deleteUser,
  updateUser
};

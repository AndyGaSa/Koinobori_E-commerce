const User = require('../models/userModel');

const getAllUsers = async ({ query }, res) => {
  try {
    const allUsers = await User.find(query);
    res.json(allUsers);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get users');
  }
};

const createUser = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not create a user');
  }
};

const getOneUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const userFound = await User.findById(userId);
    res.json(userFound);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not get a user');
  }
};

const updateUserById = async (req, res) => {
  const { body } = req;
  const { userId } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, body);
    updatedUser.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not update user');
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUserById,
  updateUserById
};

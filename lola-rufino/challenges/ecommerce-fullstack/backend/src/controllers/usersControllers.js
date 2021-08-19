const User = require('../models/usersModel');

const getAllUsers = async ({ query }, res) => {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(418);
    res.send("There aren't users");
  }
};

const createOneUser = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(418);
    res.send("Can't create a new user");
  }
};

const getOneUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(418);
    res.send("Can't get any user");
  }
};

const updateOneUserById = async (req, res) => {
  const { userId } = req.params;
  const newData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(418);
    res.send("Can't update the user");
  }
};

const deleteOneUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.json(deletedUser);
  } catch (error) {
    res.status(418);
    res.send("Can't delete the user");
  }
};

module.exports = {
  getAllUsers,
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById
};

const User = require('../models/userModel');

const postUser = async (req, res) => {
  try {
    const newTask = await User.create(req.body);
    res.status(201);
    res.json(newTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUsers = async ({ query }, res) => {
  try {
    const foundUsers = await User.find(query);
    res.status(201);
    res.json(foundUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const putOneUser = async (req, res) => {
  const userToUpdate = req.body;
  const { userId } = req.params;

  try {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      userToUpdate,
      { new: true }
    );

    res.json(updateUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const findOneUser = async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  try {
    req.user = user;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no user task with id ${userId}`));
  }
};

const getOneUser = ({ user }, res) => res.send(user);

module.exports = {
  postUser,
  getUsers,
  putOneUser,
  deleteOneUser,
  findOneUser,
  getOneUser
};

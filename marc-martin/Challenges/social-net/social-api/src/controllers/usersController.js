const User = require('../models/userModel');

async function createOneUser({ body }, res) {
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
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUserById(req, res) {
  const { userId } = req.params;
  try {
    const foundUser = await User.findById(userId)
      .populate({
        path: 'friends',
        select: ['name', 'eyeColor']
      })
      .populate({
        path: 'adversaries',
        select: ['name']
      });
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateUserById(req, res) {
  const { userId } = req.params;
  const { body } = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.status(204);
    res.json(deletedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllUsers,
  createOneUser,
  getUserById,
  updateUserById,
  deleteOneById
};

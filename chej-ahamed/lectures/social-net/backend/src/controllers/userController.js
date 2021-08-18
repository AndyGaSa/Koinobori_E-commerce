const debug = require('debug');
const User = require('../models/userModel');

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function findOneUser(req, res) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId)
      .populate({
        path: 'friends',
        select: ['name']
      })
      .populate({
        path: 'adversaries',
        select: ['name']
      });
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneUser(req, res) {
  const dataToUpdate = req.body;
  const { userId } = req.params;

  try {
    const userUpdeted = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      {
        new: true,
        useFindAndModify: false
      }
    );

    res.json(userUpdeted);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneUser(req, res) {
  const { userId } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete(userId);

    res.status(204);
    res.json(deleteUser);
    debug(deleteUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne, getAll, findOneUser, updateOneUser, deleteOneUser
};

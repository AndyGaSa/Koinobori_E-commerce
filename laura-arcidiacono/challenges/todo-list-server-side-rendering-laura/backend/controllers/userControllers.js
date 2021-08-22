const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getById({ params }, res) {
  const { userId } = params;
  try {
    const foundUser = await User.findById(userId)
      .populate({
        path: 'tasks'
      });
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { userId } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function addTaskToUser(req, res) {
  const { userId } = req.params;
  const newTask = req.body;
  try {
    const addedTask = await User.findByIdAndUpdate(
      userId,
      { $push: newTask },
      { new: true }
    );
    res.json(addedTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.send('The user was deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getById,
  updateOneById,
  addTaskToUser,
  deleteOneById
};

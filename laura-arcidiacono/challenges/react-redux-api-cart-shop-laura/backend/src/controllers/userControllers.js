const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const getAllUsers = await User.find(query);
    res.json(getAllUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getById({ query }, res) {
  const { userId } = query;
  try {
    const foundUser = await User.findById(userId);
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { userId } = req.query;
  const dataToUpdate = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true }
    );
    return res.json(updatedUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { userId } = req.query;
  try {
    await User.findByIdAndDelete(userId);
    res.json('The user has been deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getById,
  updateOneById,
  deleteOneById
};

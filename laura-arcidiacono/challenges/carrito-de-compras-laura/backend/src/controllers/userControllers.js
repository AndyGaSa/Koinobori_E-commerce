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
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById(req, res) {
  const { query } = req;
  const { userId } = query;
  try {
    const users = await User.findById(userId);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ body }, res) {
  try {
    const createdCartItem = await User.create(body);
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById
};

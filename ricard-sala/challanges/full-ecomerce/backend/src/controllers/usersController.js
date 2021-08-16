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

async function createOne(req, res) {
  try {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { userId } }, res) {
  try {
    const foundUser = await User.findById(userId);
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
};

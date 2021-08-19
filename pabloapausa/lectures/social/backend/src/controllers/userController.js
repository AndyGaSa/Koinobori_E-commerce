const User = require('../models/userModel');

async function postOne({ body }, res) {
  try {
    const createdUser = await User
      .create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const users = await User
      .find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne({ params: { userId } }, res) {
  try {
    const user = await User
      .findById(userId)
      .populate({
        path: 'friends',
        select: ['name'],
      })
      .populate({
        path: 'adversaries',
        select: ['name'],
      });
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

/* async function putFrenemies(req, res) {
  const { params: { userId } } = req;
  try {
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteFrenemies(req, res) {
  try {
  } catch (error) {
    res.status(500);
    res.send(error);
  }
} */

module.exports = {
  postOne,
  getAll,
  getOne,
};

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

async function putOne({ params: { userId }, body }, res) {
  try {
    const updatedUser = await User
      .findByIdAndUpdate(userId, body,
        { new: true, useFindAndModify: false });
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOne({ params: { userId } }, res) {
  try {
    await User
      .findByIdAndDelete(userId);
    res.status(200);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  postOne,
  getAll,
  getOne,
  putOne,
  deleteOne,
};

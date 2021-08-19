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

async function getOneById({ params: { userId } }, res) {
  try {
    const user = await User.findById(userId)
      .populate({
        path: 'friends',
        select: ['name']
      })
      .populate({
        path: 'adversaries',
        select: ['name', 'friends']
      });

    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(
  {
    body,
    params: { userId }
  },
  res
) {
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

async function deleteOneById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);

    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById
};

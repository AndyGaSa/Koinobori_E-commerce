const debug = require('debug')('social-net:userController');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  debug('getAll');
  try {
    const users = await User.find(query)
      .populate({
        path: 'friends',
        select: 'name'
      })
      .populate({
        path: 'adversaries',
        select: 'name'
      });
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  debug('createOne');
  try {
    const newUser = await User.create(body);
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { userId } }, res) {
  try {
    debug('getOne');
    const userFound = await User.findById(userId, { useFindAndModify: false })
      .populate({
        path: 'friends',
        select: 'name'
      })
      .populate({
        path: 'adversaries',
        select: 'name'
      });
    res.status(200);
    res.json(userFound);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
  try {
    debug('deleteOne');
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.json();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ params: { userId }, body }, res) {
  try {
    debug('updateOne');
    const userUpdated = await User.findByIdAndUpdate(
      userId,
      body,
      {
        useFindAndModify: false,
        new: true
      }
    )
      .populate({
        path: 'friends',
        select: 'name'
      })
      .populate({
        path: 'adversaries',
        select: 'name'
      });
    res.status(202);
    res.json(userUpdated);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
  updateOneById
};

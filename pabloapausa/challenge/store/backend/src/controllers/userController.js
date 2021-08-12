/* eslint-disable no-console */
const debug = require('debug')('store:Controller');
const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    debug('query');
    const users = await User.find(query);
    return res.json(users);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.createOne(body);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// Pendant.
async function getOneById(req, res) {
  try {
    return res.send('"getOnebyID is working"');
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// Pendant.
async function updateOneById(req, res) {
  try {
    return res.send('"updateOnebyID is working"');
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById({ params: { userId } }, res) {
  try {
    await User.send.findbyIdAndDelete(userId);
    res.status(404);
    return res.send();
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
};

/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const refreshTokens = [];

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
    const users = await User.find(query)
      .populate('friends');
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
        select: ['name']
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
    const userToUpdate = await User.findByIdAndUpdate(
      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.json(userToUpdate);
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

function signUp({ user }, res) {
  res.send({
    user,
    message: 'Register works'
  });
}

function logIn({ user }, res) {
  const data = { _id: user._id, email: user.email };
  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );
    const refreshToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET
    );

    refreshTokens.push(refreshToken);

    return res.json({
      token,
      refreshToken
    });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function protectedProfile({ user }, res) {
  res.json({
    user,
    message: 'Protected works'
  });
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
  signUp,
  logIn,
  protectedProfile,
};

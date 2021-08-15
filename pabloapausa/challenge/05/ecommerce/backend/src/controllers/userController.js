const User = require('../models/userModel');

// Query, body y params.

async function getAll(req, res) {
  try {
    const users = await User.find(req.query);
    return res.json(users);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// COMO PARA DESPUES
async function getOne(req, res, next) {
  const { params: { +userId } } = req;
  try {
    const user = await User.findById({id: +userId});

    return res.send(`Couldn't find user by ID: ${userId}`);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function postOne(req, res) {
  try {
    const createdUser = await User.create(req.body);
    return res.json(createdUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function putOne(req, res) {
  const [{ body }, { params: { userId } }] = req;
  try {
    const updatedUser = await User
      .findByIdAndUpdate(userId, body, { new: true });
    return res.json(updatedUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOne(req, res) {
  const { params: { userId } } = req;
  try {
    await User.findByIdAndDelete(userId);
    return res.send();
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getAll,
  getOne,
  postOne,
  putOne,
  deleteOne,
};

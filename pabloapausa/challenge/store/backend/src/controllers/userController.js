const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    return res.json(users);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// POST, ('body'): 'createdUser'.
async function postOne({ body }, res) {
  try {
    const createdUser = await User.createOne(body);
    return res.json(createdUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// GET, ('userId'): 'user'.
async function getOne(req, res, next) {
  const { params: { userId } } = req;
  try {
    const user = await User.findById(userId);
    if (user) {
      req.user = user;
      next();
    }
    res.status(404);
    return res.send(`Couldn't find user by Id ${userId}`);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// PUT, ('user' and 'userId'): 'updatedUser'.
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

// DELETE, (userId).
async function deleteOne({ params: { userId } }, res) {
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
  postOne,
  getOne,
  putOne,
  deleteOne,
};

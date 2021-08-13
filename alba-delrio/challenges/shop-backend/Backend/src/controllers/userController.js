const User = require('../models/userModel');

async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no users'));
  }
}

async function getAll({ query }, res) {
  try {
    const newUser = await User.find(query.body);
    return res.json(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no users'));
  }
}

async function getOneById({ params }, res) {
  try {
    const { user } = params;
    const foundUser = await User.findById(user);
    return res.json(foundUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no user with this id'));
  }
}
async function deleteOneById({ params }, res) {
  try {
    const { user } = params;
    await User.findByIdAndDelete(user);
    return res.send('The user has been deleted');
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no users'));
  }
}

module.exports = {
  getAll,
  createUser,
  getOneById,
  deleteOneById

};

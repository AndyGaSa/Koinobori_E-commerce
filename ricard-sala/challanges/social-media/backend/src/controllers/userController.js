const User = require('../model/userModel');

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
    const allUsers = await User.find(query);
    res.json(allUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOneById(req, res) {
  try {
    res.send('get works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createOne,
  getAll,
  getOneById,
};

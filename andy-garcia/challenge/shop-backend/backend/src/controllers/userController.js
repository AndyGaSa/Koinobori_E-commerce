const User = require('../models/userModel');

async function updateUser(req, res) {
  const newBeer = await User.create(req.body);

  return res.send(newBeer);
}

function getUser(req, res) {
  res.send(User);
}

function deleteUser({ beer }, res) {
  const { _id } = beer;
  User.findByIdAndDelete(_id).exec();
  res.send(`La cerveza ${beer.name} ha sido eliminada`);
}
async function findUser(req, res, next) {
  const { beerId } = req.params;
  const beer = await User.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  updateUser, getUser, deleteUser, findUser,
};

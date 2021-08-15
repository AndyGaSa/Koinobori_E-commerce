const User = require('../models/user.model');

async function getAllUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query);
    res.json(foundUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getCreateUser({ body }, res) {
  try {
    let user = await User.findOne({ email: body.email });

    if (!user) {
      user = await User.create(body);
      res.status(201);
    }
    res.json(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllUsers,
  getCreateUser
};

const User = require('../models/userModel');

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    return res.json(newUser);
  } catch (error) {
    res.status(500);
    return res.send(new Error('Error'));
  }
}

module.exports = {
  createUser
};

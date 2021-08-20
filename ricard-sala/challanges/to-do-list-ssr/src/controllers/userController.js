const User = require('../models/userModel');

const crearteUser = async ({ body }, res) => {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  crearteUser,
};

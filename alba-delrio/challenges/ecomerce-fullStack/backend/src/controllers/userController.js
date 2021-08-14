const User = require('../models/cartModel');

async function createCart(req, res) {
  try {
    const newUser = await User.create(req.body);
    return res.send(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no cart'));
  }
}

module.exports = {
  createCart
};

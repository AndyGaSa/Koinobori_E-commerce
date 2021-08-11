const Cart = require('../models/cartModel');

// Adds items to the cart.
async function postCart({ body }, res) {
  const newItem = await Cart.create(body);

  res.status(201);
  // Que lo adjunte en 'products'.
  return res.send(newItem);
}

async function getCart({ query }, res) {
  const foundItem = await { products }.filter(query);

  return res.send(foundItem);
}

module.exports = {
  postCart,
  getCart,
};

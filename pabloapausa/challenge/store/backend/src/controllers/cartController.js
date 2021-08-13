const Cart = require('../models/cartModel');

async function getAll({ query }, res) {
  try {
    const items = await Cart.items(query)
      .populate('user')
      .populate({
        path: 'items.item',
        select: ['price', 'stock', 'name'],
      });
    return res.json(items);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// POST, (body): createdCart.
async function postOne({ body }, res) {
  try {
    const createdCart = await Cart.create(body);
    return res.json(createdCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// GET, (cartId) = cart.
async function getOne(req, res, next) {
  const { params: { cartId } } = req;
  try {
    const cart = await Cart.findById(cartId);
    if (cart) {
      req.cart = cart;
      return next();
    }
    res.status(404);
    return res.send(`Couldn't find cart by Id ${cartId}`);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// PUT, (cartId, body): updatedCart.
async function putOne(req, res) {
  const [{ params: { cartId } }, { body }] = req;
  try {
    const updatedCart = await Cart
      .findByIdAndUpdate(cartId, body, { new: true });
    return res.json(updatedCart);
  } catch (error) {
    res.status(505);
    return res.send(error);
  }
}

// DELETE, (cartId).
async function deleteOne({ status: { cartId } }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204);
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

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

async function createOne({ body }, res) {
  try {
    const newCart = await Cart.create(body);
    return res.json(newCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

// Pendant.
async function getOneById(req, res) {
  try {
    return res.send('getOneById is working');
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById({ status: { cartId } }, res) {
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
  createOne,
  getOneById,
  deleteOneById,
};

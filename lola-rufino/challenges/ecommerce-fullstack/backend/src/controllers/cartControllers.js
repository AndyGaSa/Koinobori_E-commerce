const Cart = require('../models/cartModel');

const getAllCarts = async ({ query }, res) => {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name']
      });
    res.json(cartItems);
  } catch (error) {
    res.status(418);
    res.send('Not carts found');
  }
};

const createOneCart = async ({ body }, res) => {
  try {
    const newCart = await Cart.create(body);
    res.json(newCart);
  } catch (error) {
    res.status(418);
    res.send('Not carts found');
  }
};

const deleteOneCartById = async (req, res) => {
  const { cartId } = req.params;
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    res.json(deletedCart);
  } catch (error) {
    res.status(418);
    res.send("Couldn't delete a cart");
  }
};

module.exports = {
  getAllCarts,
  createOneCart,
  deleteOneCartById
};

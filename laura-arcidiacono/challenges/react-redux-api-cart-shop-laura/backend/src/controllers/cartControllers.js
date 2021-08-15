const debug = require('debug')('bookShop:cartControllers');
const Cart = require('../models/cartModel');

async function getAll({ query }, res) {
  try {
    const getAllCarts = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name']
      });
    res.json(getAllCarts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function addProductToCart(req, res) {
  try {
    let foundCart = await Cart.findOne({ user: req.params });
    debug(`foundCart: ${foundCart}`);
    if (foundCart) {
      const productAdded = req.body.product;
      const existingProduct = await Cart.findOne({ product: req.body.product });
      if (!existingProduct) {
        foundCart = Cart.push(productAdded);
      } else {
        foundCart.products.product.amount += 1;
      }
    } else {
      const newCart = await Cart.create(req.body);
      res.json(newCart);
    }
    foundCart.save();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getById({ query }, res) {
  const { cartId } = query;
  try {
    const foundCart = await Cart.findById(cartId);
    res.json(foundCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById(req, res) {
  const { cartId } = req.query;
  const dataToUpdate = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      cartId,
      dataToUpdate,
      { new: true }
    );
    return res.json(updatedCart);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function deleteOneById(req, res) {
  const { cartId } = req.query;
  try {
    await Cart.findByIdAndDelete(cartId);
    res.json('The Cart has been deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  addProductToCart,
  getById,
  updateOneById,
  deleteOneById
};

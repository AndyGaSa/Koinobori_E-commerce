const debug = require('debug')('productsShop:controller');
const Cart = require('../models/cartModel');
const Products = require('../models/productModel');

const getCarts = async ({ query }, res) => {
  try {
    const allItems = await Cart.find(query)
      .populate('user') // viene todo el elemento de user (como hacer un find de ese id)
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name']
      });
    res.json(allItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const postCart = async ({ body }, res) => {
  try {
    let createdCartItem = await Cart.create(body);
    createdCartItem = await createdCartItem
      .populate('user') // viene todo el elemento de user (como hacer un find de ese id)
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name']
      }).execPopulate();
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getCart = async ({ params: { cartId } }, res) => {
  try {
    const newCart = await Cart.findById(cartId);
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const findCartAndUpdate = async (req, res) => {
  try {
    const { body } = req;
    const { cartId } = req.params;
    const { products: [{ product }] } = body;
    const { products: [{ amount }] } = body;

    console.log(body);
    console.info(product);
    console.info(amount);

    const updatedCart = await Cart.findOneAndUpdate(cartId, body);
    const actualStock = Products.find();
    Products.findOneAndUpdate(product, { products: [{ stock: amount }] });

    res.send(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const deleteCart = async ({ params: { cartId } }, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    res.status(204);
    res.send(deletedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const createOne = async ({ body }, res) => {
  try {
    const userCart = await Cart.findOne({ user: body.user });
    if (userCart) {
      const updatedCart = await Cart.findByIdAndUpdate(
        userCart._id,
        {
          $inc: { amount: body.products[0].amount }
        },
        { new: true }
      );
      res.send(updatedCart);
    } else {
      const createdCartItem = await Cart.create(body);
      res.json(createdCartItem);
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  getCarts,
  postCart,
  getCart,
  findCartAndUpdate,
  deleteCart
};

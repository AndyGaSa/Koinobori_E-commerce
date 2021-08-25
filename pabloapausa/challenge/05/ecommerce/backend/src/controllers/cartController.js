const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

const readAllCarts = async ({ query }, res) => {
  try {
    const carts = await Cart.find(query);
    res.json(carts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const createOneCart = async ({ body }, res) => {
  try {
    const createdCart = await Cart.create(body);
    res.status(201);
    res.json(createdCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const readOneCart = async (req, res) => {
  const { params: { userId } } = req;
  try {
    let cart = await Cart.findOne({ user: userId })
      .populate('products.product');
    if (!cart) {
      cart = await Cart.create({ user: userId })
        .populate('products.product');
    }
    res.json(cart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateOneCart = async (req, res) => {
  const { params: { userId }, body } = req;
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { user: userId },
      { products: body },
      { new: true },
    ).populate('products.product');
    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const aaa = async (req, res) => {
  const { params: { userId }, body } = req;
  try {
    // const cart = await body.reduce(async (acc));
    const updatedCart = await Cart.findOneAndUpdate(
      { user: userId },
      { products: cart },
      { new: true },
    ).populate('products.product');
    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  readAllCarts,
  createOneCart,
  readOneCart,
  updateOneCart,
  aaa,
};

/*
    const notBoughtProducts = await body.reduce(async (accAsync, paidProduct) => {
      const acc = await accAsync;

      const product = await Product.findOneAndUpdate(
        { _id: paidProduct.product, stock: { $gte: paidProduct.amount } },
        { $inc: { stock: -paidProduct.amount } },
        { new: true }
      );

      return product ? acc : [...acc, paidProduct];
    }, []);
*/

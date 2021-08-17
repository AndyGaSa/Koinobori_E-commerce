const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query);
    res.json(foundCarts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createCart({ body }, res) {
  try {
    const newProduct = await Cart.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneCart({ params: { userId } }, res) {
  try {
    let foundCart = await Cart.findOne({ user: userId })
      .populate('products.product');

    if (!foundCart) {
      foundCart = await Cart.create({ user: userId })
        .populate('products.product');
    }
    res.json(foundCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateCartByUserId({ params: { userId }, body }, res) {
  try {
    const updatedCart = await Cart.findOneAndUpdate({ user: userId },
      { products: body },
      { new: true })
      .populate('products.product');
    res.json(updatedCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function payCart({ params: { userId }, body }, res) {
  try {
    const notBoughtProducts = await body.reduce(async (accAsync, paidProduct) => {
      const acc = await accAsync;

      const product = await Product.findOneAndUpdate(
        { _id: paidProduct.product, stock: { $gte: paidProduct.amount } },
        { $inc: { stock: -paidProduct.amount } },
        { new: true }
      );

      return product ? acc : [...acc, paidProduct];
    }, []);
    const newCart = await Cart.findOneAndUpdate({ user: userId },
      { products: notBoughtProducts },
      { new: true }).populate('products.product');
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getCarts,
  createCart,
  getOneCart,
  updateCartByUserId,
  payCart
};

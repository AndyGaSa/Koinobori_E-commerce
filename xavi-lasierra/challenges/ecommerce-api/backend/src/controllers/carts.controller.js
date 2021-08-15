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

function updateStock(updatedProduct) {
  return Product.findByIdAndUpdate(
    updatedProduct.product,
    { $inc: { stock: -updatedProduct.amount } },
    { new: true }
  );
}

async function payCart({ params: { userId }, body }, res) {
  try {
    const clearCart = await Cart.findOneAndUpdate({ user: userId },
      { products: [] },
      { new: true });
    body.forEach(async (product) => {
      await updateStock(product);
    });
    res.json(clearCart);
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

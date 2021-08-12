const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query).populate('user').populate({
      path: 'products',
      populate: { path: 'product' }
    });

    return res.json(foundCarts);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

async function stockCheck(products, res) {
  products.forEach(async (product) => {
    const productFound = await Product.findById(product.product);
    if (!productFound) {
      res.status(404);
      res.send(new Error('Product not found'));
      return false;
    }
    if (productFound.stock < product.amount) {
      res.send(new Error(`Not enougth stock in product ${productFound.name}`));
      return false;
    }
    return Product.findByIdAndUpdate(
      product.product,
      { stock: productFound.stock - product.amount }
    );
  });
  return true;
}

async function createCart({ body }, res) {
  try {
    if (await stockCheck(body.products, res)) {
      let newCart;
      if (await Cart.findOne({ user: body.user })) {
        newCart = await Cart.findOneAndUpdate(
          { user: body.user },
          { $push: { products: body.products } },
          { new: true }
        );
      } else {
        newCart = await Cart.create(body);
      }

      res.status(201);
      res.json(newCart);
    }
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getCartById(req, res) {
  res.send('a');
}

function updateCartById(req, res) {
  res.send('a');
}

function deleteCartById(req, res) {
  res.send('a');
}

module.exports = {
  getCarts,
  createCart,
  getCartById,
  updateCartById,
  deleteCartById
};

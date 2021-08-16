const debug = require('debug')('ecommerce:cartController');
const Cart = require('../models/cartModel');
const Product = require('./productControllers');

async function getCarts(req, res) {
  try {
    let allCarts = 0;
    debug(req.query);
    if (Object.keys(req.query).length <= 0) {
      debug('getCarts');
      allCarts = await Cart.find()
        .populate('name')
        .populate('products.product');
    } else {
      debug('getCartByName');
      allCarts = await Cart.find(req.query)
        .populate('name')
        .populate('products.product');
    }
    res.status(200);

    return res.json(allCarts[0]);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting data: ${error}`);
  }
}

async function setCart(req, res) {
  try {
    debug('setCart');
    const newCart = await Cart.create(req.body);
    res.status(201);
    return res.json(newCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while creating an element: ${error}`);
  }
}

async function deleteCart(req, res) {
  try {
    debug('deleteCart');
    const deletedCart = await Cart.findByIdAndRemove(req.params.cartId);
    res.status(200);
    return res.json(deletedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while deleting an element: ${error}`);
  }
}

async function getCartById(req, res) {
  try {
    debug('getCartById');
    const cartById = await Cart.findById(req.params.cartId)
      .populate('name')
      .populate('products.product');
    res.status(200);
    return res.json(cartById);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while getting an element: ${error}`);
  }
}

async function addProductToCart(req, res) {
  try {
    debug('addProductToCart');
    const { cartId } = req.params;
    // product info
    const productId = req.body.products.product;
    const amountToBuy = req.body.products.amount;
    // check for stock on products collection
    const stockOk = await Product.checkStock(productId, amountToBuy);
    let updatedCart = {};
    // if no stock abort add to cart
    if (stockOk) {
      debug('stockOK');
      // reduce amount from product stock
      const stockUpdated = await Product.updateStock(productId, amountToBuy);
      if (stockUpdated) {
        const currentCart = await Cart.findById(cartId);

        debug('******currentCart**********');
        debug(currentCart);

        const prodIdString = productId.toString();
        const productIndex = currentCart.products.findIndex((item) => {
          const itemProductString = (item.product).toString();
          return itemProductString === prodIdString;
        });

        // debug(`productIndex: ${productIndex}`);
        if (productIndex < 0) {
          debug('no product');
          updatedCart = await Cart.findByIdAndUpdate(cartId, { $push: req.body }, { new: true })
            .populate('name')
            .populate('products.product');
        } else {
          debug('product');

          debug(productIndex);
          currentCart.products[productIndex].amount += amountToBuy;

          debug('******currentCart:AFTER**********');
          debug(currentCart);

          updatedCart = await Cart.findByIdAndUpdate(cartId, currentCart, { new: true })
            .populate('name')
            .populate('products.product');

          //   updatedCart = await Cart.findByIdAndUpdate(
          //     cartId,
          //     { $inc: { 'products.products.$[productIndex].amount': amountToBuy } },
          //     { arrayFilters: [{ productIndex }], multi: true, new: true }
          //   )
          //     .populate('name')
          //     .populate('products.product');
        }
        res.status(200);
      } else {
        res.status(500);
      }
    } else {
      debug('stock NO OK');
      res.status(401);
    }
    return res.json(updatedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

async function deleteProductFromCart(req, res) {
  try {
    debug('updateCart');
    const { cartId } = req.params;
    const updateObject = { $pull: { products: { _id: req.body } } };
    const updatedCart = await Cart.findByIdAndUpdate(cartId, updateObject, { new: true });
    res.status(200);
    return res.json(updatedCart);
  } catch (error) {
    res.status(500);
    return res.send(`An error occurred while updating an element: ${error}`);
  }
}

module.exports = {
  getCarts,
  setCart,
  addProductToCart,
  deleteProductFromCart,
  deleteCart,
  getCartById
};

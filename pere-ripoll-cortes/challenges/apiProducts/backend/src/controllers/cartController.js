const debug = require('debug')('StoreApi');
const Cart = require('../models/cartModel');

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate('products.product');
    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const userId = await Cart.findOne({ user: body.user });
    if (userId) {
      const exist = userId.products.find((e) => e.product.toString() === body.products[0].product);

      if (exist) {
        const increment = {
          $inc: { amount: body.products[0].amount },
        };
        const updateCart = await Cart.findByIdAndUpdate(
          // eslint-disable-next-line no-underscore-dangle
          userId._id, // id del carrito
          increment,
          { new: true },
        );
        res.send(updateCart);
      } else {
        debug(exist);
        // await userId.products.push(exist);
        // await userId.save();
        res.json(userId);
      }
    } else {
      const createdCartItem = await Cart.create(body);
      res.json(createdCartItem);
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneCart({ query }, res) {
  try {
    const findCartItem = await Cart.find(query);
    res.json(findCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneCartById(req, res) {
  try {
    res.json('getOneCartById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: cartId }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.json(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  getAll,
  findOneCart,
  createOne,
  getOneCartById,
  deleteOneById,

};

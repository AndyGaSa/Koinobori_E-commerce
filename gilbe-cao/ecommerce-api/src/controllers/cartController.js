const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

async function createOne({ body }, res) {
  try {
    const userCart = await Cart.findOne({ user: body.user });

    if (userCart) {
      await body.products.forEach(async (current) => {
        const existingProduct = userCart.products.find(
          ({ product }) => product.toString() === current.product,
        );

        if (existingProduct) {
          existingProduct.amount += current.amount;
        } else {
          userCart.products.push(current);
        }
        await Product.findByIdAndUpdate(current.product, { $inc: { stock: -current.amount } });
      });

      userCart.save();
      res.send(userCart);
    } else {
      const createdCartItem = await Cart.create(body);
      res.json(createdCartItem);
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name'],
      });

    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById(req, res) {
  try {
    res.send('getOneById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteOneById({ params: { cartId } }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
};

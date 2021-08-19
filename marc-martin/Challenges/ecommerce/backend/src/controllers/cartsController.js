const Cart = require('../models/cartModel');
const Product = require('../models/productListModel');

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('user')
      .populate({
        path: 'products.product',
        select: ['price', 'stock', 'name']
      });

    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const userCart = await Cart.findOne({ user: body.user });

    if (userCart) {
      await body.products.forEach(async (current) => {
        const existingProduct = userCart.products.find(
          ({ product }) => product.toString() === current.product
        );

        const isStockAvailable = await Product.findOneAndUpdate(
          {
            _id: current.product,
            stock: { $gte: current.amount }
          },
          {
            $inc: { stock: -current.amount }
          }
        );

        if (isStockAvailable) {
          if (existingProduct) {
            existingProduct.amount += current.amount;
          } else {
            userCart.products.push(current);
          }
          await userCart.save();
        }
      });

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
  deleteOneById
};

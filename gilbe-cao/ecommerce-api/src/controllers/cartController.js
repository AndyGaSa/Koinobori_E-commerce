const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

function handleError(error, status = 500) {
  this.status(status);
  this.send(error.message);
}

async function createOne({ body }, res) {
  try {
    const userCart = await Cart.findOne({ user: body.user });

    if (userCart) {
      await body.products.forEach(async (current) => {
        const existingProduct = userCart.products.find(
          ({ product }) => product.toString() === current.product,
        );

        const isStockAvailable = await Product.findOneAndUpdate(
          {
            _id: current.product,
            stock: { $gte: current.amount },
          },
          {
            $inc: { stock: -current.amount },
          },
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

      res.json(userCart);
    } else {
      const createdCartItem = await Cart.create(body);
      res.json(createdCartItem);
    }
  } catch (error) {
    handleError.call(res, error);
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
    console.log(error.message);
    handleError.call(res, error);
  }
}

async function getOneById(req, res) {
  try {
    res.send('getOneById works');
  } catch (error) {
    handleError.call(res, error);
  }
}

async function deleteOneById({ params: { cartId } }, res) {
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204);
    res.send();
  } catch (error) {
    handleError.call(res, error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  deleteOneById,
};

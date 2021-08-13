const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

async function getCarts({ query }, res) {
  try {
    const foundCarts = await Cart.find(query)
      .populate('user')
      .populate('products.product');

    return res.json(foundCarts);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function updateCart(body, products) {
  const newProducts = products;
  const foundProductIndex = newProducts
    .findIndex(({ product }) => product.toString() === body.products[0].product);

  if (foundProductIndex !== -1) {
    newProducts[foundProductIndex].amount += body.products[0].amount;

    return Cart.findOneAndUpdate(
      { user: body.user },
      { products: newProducts },
      { new: true }
    );
  }

  return Cart.findOneAndUpdate(
    { user: body.user },
    {
      $push: {
        products: body.products
      }
    },
    { new: true }
  );
}

function updateStock(updatedProduct) {
  return Product.findByIdAndUpdate(
    updatedProduct.product,
    { $inc: { stock: -updatedProduct.amount } },
    { new: true }
  );
}

async function createCart({ body }, res) {
  try {
    let newCart;
    const existingCart = await Cart.findOne({ user: body.user });
    if (existingCart) {
      newCart = await updateCart(body, existingCart.products);
    } else {
      newCart = await Cart.create(body);
    }

    await updateStock(body.products[0]);

    res.status(201);
    res.json(newCart);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findCartById(req, res, next) {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findById(cartId);

    if (cart) {
      req.cart = cart;
      return next();
    }
    res.status(404);
    return res.send(new Error(`There is no beer with id ${cartId}`));
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function getCartById({ cart }, res) {
  res.json(cart);
}

async function deleteCartById({ params: { cartId } }, res) {
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
  getCarts,
  createCart,
  findCartById,
  getCartById,
  deleteCartById
};

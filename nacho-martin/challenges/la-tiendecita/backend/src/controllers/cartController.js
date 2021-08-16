const Cart = require('../models/cartModel');
const Product = require('../models/productsModel');

async function getAll({ query }, res) {
  try {
    const cartItems = await Cart.find(query)
      .populate('products.product');

    res.json(cartItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createOne({ body }, res) {
  try {
    const createdCartItem = await Cart.create(body);
    res.json(createdCartItem);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateStock({ product, types }) {
  const productToUpdate = await Product.findById(product);
  if (types === 'ADD_TO_CART') {
    productToUpdate.stock -= 1;
  } else {
    productToUpdate.stock += 1;
  }
  productToUpdate.save();
}

async function updateCart(req, res) {
  try {
    const cartToUpdate = await Cart.find();
    const productToAdd = await req.body;

    if (cartToUpdate[0].products.some(
      (object) => object.product.toString() === productToAdd.product
    )) {
      const productToUpadate = cartToUpdate[0].products.find(
        (object) => object.product.toString() === productToAdd.product
      );
      if (productToAdd.types === 'ADD_TO_CART') {
        productToUpadate.amount += 1;
        cartToUpdate[0].total += productToAdd.price;
      } else {
        productToUpadate.amount -= 1;
        cartToUpdate[0].total -= productToAdd.price;

        if (productToUpadate.amount === 0) {
          cartToUpdate[0].products = cartToUpdate[0].products.filter(
            (product) => product !== productToUpadate
          );
        }
      }
    } else {
      cartToUpdate[0].products = [...cartToUpdate[0].products, productToAdd];
      cartToUpdate[0].total += productToAdd.price;
    }
    updateStock(productToAdd);
    cartToUpdate[0].save();
    res.json(cartToUpdate[0].products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
module.exports = {
  getAll,
  createOne,
  updateCart
};

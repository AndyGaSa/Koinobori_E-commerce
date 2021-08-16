const Cart = require('../models/cartModel');

const readAllcarts = async ({ query }, res) => { // GET.
  try {
    const carts = await Cart.find(query);
    res.json(carts); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const createOnecart = async ({ body }, res) => { // POST.
  try {
    const createdcart = await Cart.create(body);
    res.json(createdcart);
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const searchOnecart = async (req, res, next) => {
  const { params: { cartId } } = req;
  try {
    const cart = await Cart.findById(cartId);
    if (cart) {
      req.cart = cart; // Create 'cart' property.
      next(); // To GET, PUT or DELETE methods.
    } else {
      res.status(404); // Not Found.
      res.send(new Error('Couldn\'t find cart'));
    }
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const readOnecart = ({ cart }, res) => res.send(cart); // GET.

const updateOnecart = async (req, res) => { // PUT.
  const [{ cart }, { params: { cartId } }] = req;
  try {
    const updatedcart = await Cart.findByIdAndUpdate(
      cartId,
      cart,
      { new: true },
    );
    res.json(updatedcart); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

const deleteOnecart = async ({ params: { cartId } }, res) => { // DELETE.
  try {
    await Cart.findByIdAndDelete(cartId);
    res.status(204); // No Content.
    res.json(); // Send JSON parse.
  } catch (error) {
    res.status(500); // Internal Server Error.
    res.send(error); // Send error response.
  }
};

module.exports = {
  readAllcarts,
  createOnecart,
  searchOnecart,
  readOnecart,
  updateOnecart,
  deleteOnecart,
};

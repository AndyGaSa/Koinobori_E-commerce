/* eslint-disable max-len */
const debugDev = require('debug')('dev');
const Carrito = require('../models/carrito');

async function getCarritos({ query }, res) {
  try {
    const foundCarritos = await Carrito.find(query).populate('user').populate('products.product');

    res.send(foundCarritos);
  } catch (error) {
    res.send(501);
  }
}

async function createCarrito({ body }, res) {
  try {
    const carrito = await Carrito.findOne({ user: body.user });

    if (carrito) {
      await body.products.forEach(async (current) => {
        const existingProduct = carrito.products.find(
          ({ product }) => product.toString() === current.product
        );
        if (existingProduct) {
          debugDev(existingProduct.amount);
          existingProduct.amount += current.amount;
        } else {
          carrito.products.push(current);
        }

        await carrito.save();
      });
    } else {
      const newcarrito = await Carrito.create(body);
      res.json(newcarrito);
    }
  } catch (error) {
    res.status(501);
    res.send(error);
  }
}

async function putCarrito(req, res) {
  const dataToUpdate = req.body;
  const { carritoId } = req.params;
  const updatedCarrito = await Carrito.findByIdAndUpdate(
    carritoId,
    dataToUpdate,
    { new: true }
  );
  return res.send(updatedCarrito);
}

module.exports = {
  getCarritos,
  createCarrito,
  putCarrito
};

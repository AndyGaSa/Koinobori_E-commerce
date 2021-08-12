const Cart = require('../models/cartModel');

async function getCart({ query }, res) {
  try {
    const foundCart = await Cart.find(query)
      .populate({
        path: 'user',
        select: ['name'],
      })
      .populate({
        path: 'items.item',
        select: ['name', 'price'],
      });
    return res.json(foundCart);
  } catch (error) {
    return res.send(error);
  }
}

async function postCart(req, res) {
  console.log('creando carro');
  const newCart = await Cart.create(req.body);
  return res.send(newCart);
}

function updateCart(foundCart, body, res) {
  const foundItem = foundCart.items.find((
    currentProduct,
  ) => JSON.stringify(currentProduct.item) === JSON.stringify(body.items[0].item));
  if (foundItem) {
    const newCart = foundCart;
    newCart.items.amount = foundCart.items.amount + body.items[0].amount;
    return res.send(newCart);
  }
  return res.send(foundCart);
}

async function createModifyCart(req, res) {
  const { cartId } = req.params;
  const foundCart = await Cart.findById(cartId);
  return (foundCart !== null)
    ? updateCart(foundCart, req.body, res)
    : postCart(req, res);

  // const newItem = req.body.items;
  // const newData = mainData.items.push(newItem);
  // const newCart = Cart.findByIdAndUpdate(cartId, mainData, { new: true });
  // return res.send(newCart);
}

module.exports = {
  postCart,
  getCart,
  createModifyCart,
};

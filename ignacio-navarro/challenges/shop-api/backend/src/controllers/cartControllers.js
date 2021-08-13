/* eslint-disable no-else-return */
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
  const newCart = await Cart.create(req.body);
  return res.send(newCart);
}

function updateCart(foundCart, body, res, cartId) {
  const itemsIds = foundCart.items.map((item) => String(item.item));
  const updatedItems = body.items.map((currentItem, index) => {
    const isItemInDDBB = itemsIds.includes(String(currentItem.item));
    if (isItemInDDBB) {
      return {
        // eslint-disable-next-line no-underscore-dangle
        _id: currentItem._id,
        item: currentItem.item,
        amount: currentItem.amount + foundCart.items[index].amount, // ??cantidad en front end
      };
    } else {
      return currentItem;
    }
  });
  const response = {
    _id: String(cartId),
    user: foundCart.user,
    items: updatedItems,
  };
  const newCart = Cart.findByIdAndUpdate(cartId, response);
  return res.send(newCart);
}

async function createModifyCart(req, res) {
  const { cartId } = req.params;
  const foundCart = await Cart.findById(cartId);
  return (foundCart !== null)
    ? updateCart(foundCart, req.body, res, cartId)
    : postCart(req, res);
}

module.exports = {
  postCart,
  getCart,
  createModifyCart,
};

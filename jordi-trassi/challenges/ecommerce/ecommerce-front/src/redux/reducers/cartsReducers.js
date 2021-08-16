import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = {
  items: [], 
  totalPrice: 0,
}, action) {
  if (action.type === actionTypes.ADD_TO_CARTS) {
    const totalPrice = action.product.amount * action.product.price;
    const items = cart.items.some((itme) => items.product === action.product);
    ? cart.items.map((item) => {
      if (item.product === action.product.product) {
        return {
          ...item,
          amount: item.amount + action.product.amount,
        };
      }
      return item;
    })
    : [...cart.items, action.product];

    return {
      items,
      totalPrice: cart.totalPrice + totalPrice,
    };
  }
  return cart;
}
  
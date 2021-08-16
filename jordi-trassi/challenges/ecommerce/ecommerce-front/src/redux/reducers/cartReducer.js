import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = {
  items: [],
  totalPrice: 0,
}, action) {
  let nextCart = cart;
  switch (action.type) {
    case actionTypes.PAY_PRODUCTS:
      nextCart = {
        items: [],
        totalPrice: 0,
      };
      break;

    case actionTypes.ADD_TO_CART:
      nextCart = {
        items: cart.items.some((item) => item.product === action.product.product)
          ? cart.items.map((item) => {
            if (item.product === action.product.product) {
              return {
                ...item,
                amount: item.amount + action.product.amount,
              };
            }
            return item;
          })
          : [...cart.items, action.product],
        totalPrice: cart.totalPrice + action.product.amount * action.product.price,
      };
      break;

    default:
      break;
  }

  return nextCart;
}

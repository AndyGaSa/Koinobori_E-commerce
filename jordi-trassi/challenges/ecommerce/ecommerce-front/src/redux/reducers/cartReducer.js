import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = {
  items: [],
  totalPrice: 0,
}, action) {
  // eslint-disable-next-line no-debugger
  debugger;
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

    case actionTypes.DELETE_TO_CART:
      nextCart = {
        items: action.product.amount > 0
          ? cart.items.map((item) => {
            if (item.product === action.product.product) {
              return action.product;
            }
            return item;
          })
          : cart.items.filter((item) => item.product !== action.product.product),
        totalPrice: cart.totalPrice - action.product.price,
      };
      break;

    default:
      break;
  }

  return nextCart;
}

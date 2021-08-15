import actionTypes from '../actions/types/cart';

export default function cartReducer(cart = [], action) {
  let newCart = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      newCart = action.cart?.map((product) => product);
      break;

    default:
      break;
  }
  return newCart;
}

import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = [], action) {
  let cartList = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      cartList = action.data;
      break;
    default:
      break;
  }
  return cartList;
}

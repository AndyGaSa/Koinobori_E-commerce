import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = [], action) {
  let cartList = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      cartList = action.data;
      break;
    case actionTypes.UPDATE_CART:
      cartList = [...cartList, action.data];
      break;
    case actionTypes.BUY_CART:
      // buy Cart
      break;
    case actionTypes.DELETE_CART:
      // delete Cart
      break;
    default:
      cartList = cart;
      break;
  }
  return cartList;
}

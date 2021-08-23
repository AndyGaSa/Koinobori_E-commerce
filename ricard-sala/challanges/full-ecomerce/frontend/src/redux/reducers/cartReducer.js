import actionTypes from '../actions/actionTypes';

export default function cartReducer(cartList = [], action) {
  let newCartList = cartList;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newCartList = [...cartList, action.data];
      break;
    default:
      break;
  }
  return newCartList;
}

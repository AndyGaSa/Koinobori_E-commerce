import actionTypes from '../actions/actionTypes';

export default function cartReducer(cartProductList = [], action) {
  let newCartProductList = cartProductList;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newCartProductList = [...cartProductList, action.product];
      break;

    default:
      break;
  }
  return newCartProductList;
}

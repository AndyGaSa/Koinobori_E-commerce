/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function cartReducer(cartProductList = [], action) {
  let newCartProductList = cartProductList;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newCartProductList = [...cartProductList, action.product];
      break;

    case actionTypes.REMOVE_FROM_CART:
      newCartProductList = cartProductList.filter((product) => product._id !== action.product._id);
      break;

    default:
      break;
  }
  return newCartProductList;
}

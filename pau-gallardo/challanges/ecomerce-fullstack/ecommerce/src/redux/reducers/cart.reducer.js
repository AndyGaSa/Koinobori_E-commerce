/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function cartReducer(cartProductList = [], action) {
  let newCartProductList = cartProductList;
  let isInCart = false;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      isInCart = cartProductList.some((product) => product._id === action.product._id);
      if (!isInCart) {
        newCartProductList = [...cartProductList, action.product];
      }
      break;

    case actionTypes.REMOVE_FROM_CART:
      newCartProductList = cartProductList.filter((product) => product._id !== action.product._id);
      break;

    case actionTypes.UPDATE_PRODUCT_AMOUNT:
      newCartProductList[action.index] = action.product;
      newCartProductList = [...newCartProductList];
      break;

    default:
      break;
  }
  return newCartProductList;
}

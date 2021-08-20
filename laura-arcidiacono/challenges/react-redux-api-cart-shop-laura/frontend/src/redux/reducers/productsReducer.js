/* eslint-disable no-unreachable */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let nextProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.data;
      break;

    case actionTypes.ADD_TO_CART:
      nextProducts = products.map((product) => {
        if (product._id === action.product.product) {
          product.stock -= action.product.amount;
        }
        return product;
      });
      break;

    case actionTypes.PAY_PRODUCTS:
      nextProducts = action.products;
      break;

    default:
      break;
  }
  return nextProducts;
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable default-case */
import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let nextProducts = products;
  switch (action.type) {
    case actionTypes.PAY_PRODUCTS:
      nextProducts = action.products;
      break;

    case actionTypes.ADD_TO_CART:
      nextProducts = products.map((product) => {
        if (product._id === action.product.product) {
          product.stock -= action.product.amount;
        }
        return product;
      });
      break;

    case actionTypes.DELETE_TO_CART:
      console.log(action.product);
      nextProducts = products.map((product) => {
        if (product._id === action.product.product) {
          product.stock += 1;
        }
        return product;
      });
      break;

    case actionTypes.LOAD_PRODUCTS:
      nextProducts = action.data;
      break;

    default:
      break;
  }

  return nextProducts;
}

/* eslint-disable default-case */
import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let nextProducts = products;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      nextProducts = products.map((product) => {
        if (product._id === action.product.product) {
          product.stock -= action.product.amount;
        }
        return product;
      });
      break;

    case actionTypes.LOAD_PRODUCTS:
      nextProducts = action.data;
      break;
  }

  return nextProducts;
}

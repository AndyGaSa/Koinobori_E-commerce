import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let productsList = products;
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    productsList = action.data;
  }
  return productsList;
}

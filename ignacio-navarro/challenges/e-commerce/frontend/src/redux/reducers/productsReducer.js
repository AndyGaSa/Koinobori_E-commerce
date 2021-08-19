import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let newProducts = products;
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    newProducts = action.data;
  }
  return newProducts;
}

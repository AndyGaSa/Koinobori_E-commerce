import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return action.data;
  }
  return products;
}

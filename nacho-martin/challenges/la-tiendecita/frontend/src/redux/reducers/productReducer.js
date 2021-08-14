import actionTypes from '../actions/actionTypes/actionTypes';

export default function productReducer(products = [], action) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return action.data;
  }
  return products;
}

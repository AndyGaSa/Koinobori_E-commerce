import actionTypes from '../actions/actionTypes';

export default function randomBeerReducer(products = {}, action) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return action.data[0];
  }
  return products;
}

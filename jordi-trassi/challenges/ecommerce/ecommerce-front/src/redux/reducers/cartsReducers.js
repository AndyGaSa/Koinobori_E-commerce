import actionTypes from '../actions/actionTypes';

export default function productsReducer(carts = [], action) {
  if (action.type === actionTypes.LOAD_CARTS) {
    return action.data;
  }
  return carts;
}

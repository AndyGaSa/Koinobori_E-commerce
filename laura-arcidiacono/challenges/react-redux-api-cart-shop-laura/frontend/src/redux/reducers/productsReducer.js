import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.data;
    default:
      return products;
  }
}

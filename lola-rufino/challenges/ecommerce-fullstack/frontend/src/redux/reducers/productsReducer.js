import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let productsList = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      productsList = action.data;
      break;
    default:
      break;
  }
  return productsList;
}

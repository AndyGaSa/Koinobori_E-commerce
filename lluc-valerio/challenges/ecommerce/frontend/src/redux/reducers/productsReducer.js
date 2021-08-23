import actionTypes from '../actions/actionTypes';

export default function productsReducer(products = [], action) {
  let newProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      newProducts = action.data;
      break;
    default:
      break;
  }
  return newProducts;
}

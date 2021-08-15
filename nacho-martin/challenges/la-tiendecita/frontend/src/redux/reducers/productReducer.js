import actionTypes from '../actions/types/products';

export default function productReducer(products = [], action) {
  let newProducts = products;
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    newProducts = action.products;
    return action.products;
  }
  return newProducts;
}

import actionTypes from '../actions/products.actions';

function productsReducer(products = [], action) {
  let newProducts = products;
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    newProducts = action.data;
  }
  return newProducts;
}

export default productsReducer;

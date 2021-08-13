import actionTypes from '../actions/products.actions';

function productsReducer(products = [], action) {
  const newProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      break;
    default:
      break;
  }
  return newProducts;
}

export default productsReducer;

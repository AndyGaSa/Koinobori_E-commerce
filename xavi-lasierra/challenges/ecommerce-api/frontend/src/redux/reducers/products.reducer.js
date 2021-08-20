/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/products.actions';
import cartTypes from '../actions/cart.actions';

function productsReducer(products = [], action) {
  let newProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      newProducts = action.data;
      break;
    case cartTypes.ADD_TO_CART:
      newProducts = newProducts.map((product) => (
        (product._id === action.data._id && product.stock > 0)
          ? { ...product, stock: product.stock - 1 }
          : product
      ));
      break;
    case cartTypes.SUBSTRACT_FROM_CART:
      newProducts = newProducts.map((product) => (
        product._id === action.data
          ? { ...product, stock: product.stock + 1 }
          : product
      ));
      break;
    default:
      break;
  }

  return newProducts;
}

export default productsReducer;

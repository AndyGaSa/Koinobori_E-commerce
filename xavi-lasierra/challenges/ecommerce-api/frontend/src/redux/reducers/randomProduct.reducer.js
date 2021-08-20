/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/randomProduct.actions';
import cartTypes from '../actions/cart.actions';

function randomProductReducer(randomProduct = [], action) {
  let newRandomProduct = randomProduct;
  switch (action.type) {
    case actionTypes.GET_RANDOM_PRODUCT:
      newRandomProduct = action.data;
      break;
    case cartTypes.ADD_TO_CART:
      newRandomProduct = newRandomProduct.map((product) => (
        (product._id === action.data._id && product.stock > 0)
          ? { ...product, stock: product.stock - 1 }
          : product
      ));
      break;
    case cartTypes.SUBSTRACT_FROM_CART:
      newRandomProduct = newRandomProduct.map((product) => (
        product._id === action.data
          ? { ...product, stock: product.stock + 1 }
          : product
      ));
      break;
    default:
      break;
  }

  return newRandomProduct;
}

export default randomProductReducer;

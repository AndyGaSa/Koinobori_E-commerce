/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/cart.actions';

function cartReducer(cart = {
  products: []
}, action) {
  let newCart = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      newCart = action.data;
      break;
    case actionTypes.ADD_TO_CART:
      if (newCart.products.some(({ product: { _id } }) => _id === action.data._id)) {
        newCart = {
          ...newCart,
          products: newCart.products.map((product) => (product.product._id === action.data._id
            ? { ...product, amount: product.amount + 1 }
            : product))
        };
      } else {
        newCart = {
          ...newCart,
          products: [...newCart.products, {
            product: action.data,
            amount: 1
          }]
        };
      }
      break;
    default:
      break;
  }
  return newCart;
}

export default cartReducer;

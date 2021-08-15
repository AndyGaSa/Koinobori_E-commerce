import actionTypes from '../actions/cart.actions';

function cartReducer(cart = {
  products: []
}, action) {
  const newCart = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      break;
    default:
      break;
  }
  return newCart;
}

export default cartReducer;

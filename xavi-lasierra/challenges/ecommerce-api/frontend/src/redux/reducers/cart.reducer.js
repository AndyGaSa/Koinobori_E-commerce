import actionTypes from '../actions/cart.actions';

function cartReducer(cart = {
  products: []
}, action) {
  let newCart = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      newCart = action.data;
      break;
    default:
      break;
  }
  return newCart;
}

export default cartReducer;

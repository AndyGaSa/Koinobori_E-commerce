import actionTypes from '../actions/actionTypes';

export default function cartReducer(cart = {}, action) {
  let newCart = cart;
  switch (action.type) {
    case actionTypes.CREATE_CART:
      newCart = action.data;
      break;

    case actionTypes.UPDATE_CART:
      console.log(cart, 'cart');
      console.log(action, 'action.data');
      newCart.products = [...cart.products, action.data];
      break;

    default:
      newCart = cart;
      break;
  }
  return newCart;
}

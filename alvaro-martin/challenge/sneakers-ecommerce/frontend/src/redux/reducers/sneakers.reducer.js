import actionTypes from '../actions/sneakers.types';

export function sneakersReducer(sneakers = [], action) {
  if (action.type === actionTypes.LOAD_SNEAKERS) {
    return action.sneakers;
  }
  return sneakers;
}
export function cartReducer(cart = [], action) {
  if (action.type === actionTypes.LOAD_CART) {
    return action.cart;
  }
  return cart;
}

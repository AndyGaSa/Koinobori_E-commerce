import actionType from '../actions/actionType';

export default function cartReducer(cartList = [], action) {
  if (action.type === actionType.ADD_UNIT) {
    console.log(cartList);
  }
  return cartList;
}

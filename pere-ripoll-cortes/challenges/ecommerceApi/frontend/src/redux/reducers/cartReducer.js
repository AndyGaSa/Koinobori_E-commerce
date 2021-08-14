import actionType from '../actions/actionType';

export default function cartReducer(cartList = [], action) {
  let newCartList = cartList;

  switch (action.type) {
    case actionType.GET_PRODUCT:
      newCartList = action.data;
      break;

    case actionType.ADD_PRODUCT_CART:
      newCartList = [...cartList, action.data];
      break;
    default:
      break;
  }

  return newCartList;
}

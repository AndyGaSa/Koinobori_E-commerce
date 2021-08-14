import actionTypes from '../actions/actionTypes';

export default function productListReducer(productCartList = [], action) {
  let newProductCartList = productCartList;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newProductCartList = [...productCartList, action.product];
      break;

    default:
      break;
  }
  return newProductCartList;
}

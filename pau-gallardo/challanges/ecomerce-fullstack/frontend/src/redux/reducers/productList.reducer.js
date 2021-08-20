import actionTypes from '../actions/actionTypes';

export default function productListReducer(productList = [], action) {
  let newProductCartList = productList;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT_LIST:
      newProductCartList = action.productList.map(((product) => product));
      break;

    default:
      break;
  }
  return newProductCartList;
}

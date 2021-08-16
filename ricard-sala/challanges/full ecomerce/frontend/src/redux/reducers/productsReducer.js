import actionTypes from '../actions/actionTypes';

export default function productsReducers(products = [], action) {
  let newProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      newProducts = action.data;

      break;
      // case: actionTypes.ADD_TO_CART;
      // nextProducts=products.map(product=>{

      // })
    default:
      break;
  }
  return newProducts;
}

import actionTypes from '../actions/randomProduct.actions';

function randomProductReducer(randomProduct = [], action) {
  let newRandomProduct = randomProduct;
  if (action.type === actionTypes.GET_RANDOM_PRODUCT) {
    newRandomProduct = action.data;
  }
  return newRandomProduct;
}

export default randomProductReducer;

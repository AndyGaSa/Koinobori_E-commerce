import actionTypes from '../actions/actionTypes';

export default function oneBeerReducer(oneBeer = [], action) {
  let newBeer = oneBeer;
  if (action.type === actionTypes.LOAD_ONEBEER) {
    newBeer = action.data;
  }
  return newBeer;
}

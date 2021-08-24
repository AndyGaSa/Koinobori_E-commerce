import actionTypes from '../actions/gnomes.actions';

function gnomesReducer(gnomes = [], action) {
  let newGnomes = gnomes;
  switch (action.type) {
    case actionTypes.LOAD_GNOMES:
      newGnomes = action.data;
      break;
    case actionTypes.CLEAR_GNOMES:
      newGnomes = [];
      break;
    default:
      break;
  }

  return newGnomes;
}

export default gnomesReducer;

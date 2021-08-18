import actionTypes from '../actions/actionTypes';

export default function gnomesReducer(gnomes = [], action) {
  if (action.type === actionTypes.LOAD_GNOMES) {
    return action.data;
  }
  return gnomes;
}

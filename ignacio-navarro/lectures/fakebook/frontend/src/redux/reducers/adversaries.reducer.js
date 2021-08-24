import actionTypes from '../actions/action.types';

export default function adversariesReducer(adversaries = {}, action) {
  let newAdversaries = adversaries;
  if (action.type === actionTypes.LOAD_ADVERSARIES) {
    newAdversaries = action.data;
    return newAdversaries;
  }
  return newAdversaries;
}

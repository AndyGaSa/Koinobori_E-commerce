import actionTypes from '../actions/sneakers.types';

export default function sneakersReducer(sneakers = [], action) {
  if (action.type === actionTypes.LOAD_SNEAKERS) {
    return action.sneakers;
  }
  return sneakers;
}

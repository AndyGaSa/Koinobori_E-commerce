import actionTypes from '../actions/actionTypes';

export default function currentGnomeReducer(currentGnome = {}, action) {
  let newGnome = currentGnome;
  if (action.type === actionTypes.LOAD_CURRENT_GNOME) {
    newGnome = action.currentGnome;
  }
  return newGnome;
}

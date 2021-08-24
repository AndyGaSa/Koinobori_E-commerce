import actionTypes from '../actions/currentgnomeTypes';

export default function loadCurrentGnome(currentGnome = {}, action) {
  let newGnome = currentGnome;
  if (action.type === actionTypes.LOAD_CURRENT_GNOME) {
    newGnome = action.currentGnome;
  }
  return newGnome;
}

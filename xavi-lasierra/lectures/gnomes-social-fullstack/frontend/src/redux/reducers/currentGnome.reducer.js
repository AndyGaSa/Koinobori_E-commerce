import actionTypes from '../actions/currentGnome.actions';

function currentGnomeReducer(gnome = {}, action) {
  let newGnome = gnome;
  if (action.type === actionTypes.LOAD_GNOME) {
    newGnome = gnome;
  }
  return newGnome;
}

export default currentGnomeReducer;

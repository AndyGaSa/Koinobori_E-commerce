import actionTypes from '../actions/currentGnome.actions';
import userTypes from '../actions/user.actions';

function currentGnomeReducer(gnome = {}, action) {
  let newGnome = gnome;

  switch (action.type) {
    case actionTypes.LOAD_GNOME:
    case userTypes.LOAD_USER:
      newGnome = action.data;
      break;
    case userTypes.LOGOUT_USER:
      newGnome = {};
      break;
    default:
      break;
  }

  return newGnome;
}

export default currentGnomeReducer;

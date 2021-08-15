import actionTypes from '../actions/actionTypes';

export default function usernameReducer(username = [], action) {
  let newUsername = username;
  switch (action.type) {
    case actionTypes.SAVE_USERNAME:
      newUsername = [action.username];
      break;

    default:
      break;
  }
  return newUsername;
}

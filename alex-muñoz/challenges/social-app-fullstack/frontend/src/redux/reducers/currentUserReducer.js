import actionTypes from '../actions/types/currentUser';

export default function currentUserReducer(currentUser = {}, action) {
  let newCurrentUser = currentUser;
  if (action.type === actionTypes.LOAD_CURRENT_USER) {
    newCurrentUser = action.currentUser;
  }
  return newCurrentUser;
}

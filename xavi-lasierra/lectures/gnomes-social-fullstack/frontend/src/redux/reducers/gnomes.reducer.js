import actionTypes from '../actions/gnomes.actions';

function usersReducer(user = {}, action) {
  let newUser = user;
  if (action.type === actionTypes.LOAD_GNOMES) {
    newUser = user;
  }
  return newUser;
}

export default usersReducer;

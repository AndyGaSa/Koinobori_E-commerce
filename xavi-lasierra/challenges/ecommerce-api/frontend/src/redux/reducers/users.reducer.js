import actionTypes from '../actions/users.actions';

function usersReducer(user = {}, action) {
  let newUser = user;
  if (action.type === actionTypes.LOAD_USER) {
    newUser = action.data;
  }
  return newUser;
}

export default usersReducer;

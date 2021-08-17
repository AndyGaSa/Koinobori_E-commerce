import actionTypes from '../actions/users.actions';

function usersReducer(user = {}, action) {
  let newUser = user;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newUser = action.data;
      break;
    default:
      break;
  }
  return newUser;
}

export default usersReducer;

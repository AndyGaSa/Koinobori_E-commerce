import actionTypes from '../actions/actionTypes';

export default function usersReducer(initialState = [], action) {
  // eslint-disable-next-line no-console
  console.log(action.users);
  let users = initialState;
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      users = action.users;
      break;
    default:
      break;
  }
  return users;
}

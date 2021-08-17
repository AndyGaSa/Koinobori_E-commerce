import actionTypes from '../actions/types/users';

export default function usersReducer(users = [], action) {
  let newUsersList = users;
  if (action.type === actionTypes.LOAD_USERS) {
    newUsersList = action.users?.map((user) => user);
  }
  return newUsersList;
}

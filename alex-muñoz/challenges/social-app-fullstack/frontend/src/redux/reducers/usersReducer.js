import actionTypes from '../actions/actionTypesUsers';

export default function usersReducer(users = [], action) {
  let newUsersList = users;
  if (action.type === actionTypes.LOAD_USERS) {
    newUsersList = action.users?.map((product) => product);
  }
  return newUsersList;
}

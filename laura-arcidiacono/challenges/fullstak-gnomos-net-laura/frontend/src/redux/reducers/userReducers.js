import actionTypes from '../actions/actionTypes';

export default function userReducers(users = [], action) {
  let newUsers = users;
  if (action.type === actionTypes.LOAD_USERS) {
    newUsers = action.data.map((gnomo) => gnomo);
  }
  return newUsers;
}

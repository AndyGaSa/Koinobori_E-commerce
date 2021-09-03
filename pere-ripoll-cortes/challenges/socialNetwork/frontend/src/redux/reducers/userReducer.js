import actionsType from '../actions/actionsType';

export default function userReducer(users = [], action) {
  let newUsers = users;
  switch (action.type) {
    case actionsType.LOAD_USERS:
      newUsers = [...users, action.data];
      break;

    default:
      break;
  }
  return newUsers;
}

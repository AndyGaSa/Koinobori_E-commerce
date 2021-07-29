import crud from '../actions/action.types';

export default function reducer(oldUsers = [], action) {
  let newUsers = oldUsers;
  switch (action.type) {
    case crud.CREATE_USER:
      newUsers = [...oldUsers, action.user];
      break;
    case crud.UPDATE_USER:
      newUsers[action.index] = action.user;
      newUsers = [...newUsers];
      break;
    case crud.DELETE_USER:
      newUsers = oldUsers.filter((user) => user !== action.user);
      break;
    default:
      break;
  }

  return newUsers;
}

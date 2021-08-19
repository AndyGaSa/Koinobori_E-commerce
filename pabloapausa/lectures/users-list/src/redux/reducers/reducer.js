/* eslint-disable no-console */
import crud from '../actions/action.types';
import mock from '../../constants/users.mock';

export default function reducer(oldUsers = mock, action) {
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
      newUsers = oldUsers.filter((user) => user.name !== action.user);
      break;
    default:
      break;
  }

  return newUsers;
}

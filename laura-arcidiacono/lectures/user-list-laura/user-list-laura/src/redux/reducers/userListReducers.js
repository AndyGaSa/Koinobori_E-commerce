import actionTypes from '../actions/action.types';
import usersMock from '../../component/constantUsersList.js/user.mock';

export default function userListReducer(usersList = usersMock, action) {
  let newUsersList = usersList;
  switch (action.type) {
    case actionTypes.CREATE_USER:
      newUsersList = [...usersList, action.user];
      break;

      /* case actionTypes.UPDATE_USER:
      if(newUsersList.id === )
      break;

    case actionTypes.DELETE_USER:
      newUsersList = usersList.filter((user) => user !== action.user);
      break; */

    default:
      break;
  }

  return newUsersList;
}

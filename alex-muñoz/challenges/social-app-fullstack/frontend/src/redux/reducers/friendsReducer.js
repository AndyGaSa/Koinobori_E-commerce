import actionTypes from '../actions/types/friends';

export default function friendsReducer(friends = [], action) {
  let newFriendsList = friends;
  switch (action.type) {
    case actionTypes.LOAD_FRIENDS:
      newFriendsList = action.friends?.map((friend) => friend);
      break;
    case actionTypes.ADD_USER_TO_FRIEND:
      // newFriendsList = [...newFriendsList, action.friends];
      console.log(action.friends);
      break;

    default:
      break;
  }
  return newFriendsList;
}

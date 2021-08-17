import actionTypes from '../actions/types/friends';

export default function friendsReducer(friends = [], action) {
  let newFriendsList = friends;
  if (action.type === actionTypes.LOAD_FRIENDS) {
    newFriendsList = action.friends?.map((friend) => friend);
  }
  return newFriendsList;
}

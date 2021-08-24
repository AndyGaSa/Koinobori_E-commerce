import actionTypes from '../actions/action.types';

export default function friendsReducer(friends = {}, action) {
  let newFriends = friends;
  if (action.type === actionTypes.LOAD_FRIENDS) {
    newFriends = action.data;
    return newFriends;
  }
  return newFriends;
}

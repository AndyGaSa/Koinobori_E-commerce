import actionTypes from '../actions/user.actioTypes';

export default function userReducer(profiles = [], action) {
  let nextProfiles = profiles;
  switch (action.type) {
    case actionTypes.LOAD_PROFILES:
      nextProfiles = action.data;
      break;
    default:
      break;
  }
  return nextProfiles;
}

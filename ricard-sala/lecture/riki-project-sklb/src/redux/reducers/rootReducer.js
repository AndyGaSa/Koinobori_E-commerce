import actionTypes from '../actions/actionTypes';

export default function rootReducer(state = false, action) {
  let newUser = state;
  if (action.type === actionTypes.UPDATE_STATE) { newUser = action.state; }
  return newUser;
}

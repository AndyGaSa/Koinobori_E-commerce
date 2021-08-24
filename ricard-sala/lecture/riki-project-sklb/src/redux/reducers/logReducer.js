import actionTypes from '../actions/actionTypes';

export default function loggReducer(state = false, action) {
  let newUser = state;
  if (action.type === actionTypes.UPDATE_STATE) { newUser = action.state; }
  return newUser;
}

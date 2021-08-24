import actionTypes from './actionTypes';

export default function UpdateState(state) {
  return {
    type: actionTypes.UPDATE_STATE,
    state,
  };
}

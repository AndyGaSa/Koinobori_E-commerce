import actionTypes from './actionTypes';

export default function setUsername(username) {
  return ({
    type: actionTypes.SAVE_USERNAME,
    username,
  });
}

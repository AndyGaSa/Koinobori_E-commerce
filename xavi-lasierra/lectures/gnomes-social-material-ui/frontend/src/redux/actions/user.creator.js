import axios from 'axios';

import userTypes from './user.actions';
import notificationTypes from './notifications.actions';
import currentGnomeActions from './currentGnome.actions';

export function logUser(userName) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/login?name=${userName}`);

      dispatch({
        type: userTypes.LOAD_USER,
        data
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        dispatch({
          type: notificationTypes.LOGIN_ERROR,
          data: 'User not registered'
        });
      } else {
        dispatch({
          type: notificationTypes.ERROR_GENERIC,
          data: 'Server error'
        });
      }
    }
  };
}

export function updateUser(updateData, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/gnomes/${id}`, updateData);

      dispatch({
        type: userTypes.UPDATE_USER,
        data
      });
    } catch (error) {
      dispatch({
        type: notificationTypes.ERROR_GENERIC,
        data: 'Server error'
      });
    }
  };
}

export function logoutUser() {
  return {
    type: userTypes.LOGOUT_USER
  };
}

export function closeNotification() {
  return {
    type: userTypes.CLEAR_NOTIFICATION
  };
}

export function goToUser(data) {
  return {
    type: currentGnomeActions.LOAD_GNOME,
    data
  };
}

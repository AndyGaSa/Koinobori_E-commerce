import React from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';

export default function LogoutBtn() {
  const dispatch = useDispatch();
  function changeState() {
    dispatch({
      type: actionTypes.UPDATE_STATE,
      state: false,
    });
    // eslint-disable-next-line no-console
    console.log('dispatch');
  }
  return (
    <button type="button" onClick={changeState}>logout</button>
  );
}

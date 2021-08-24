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
  }
  return (
    <button type="button" onClick={changeState}>logout</button>
  );
}

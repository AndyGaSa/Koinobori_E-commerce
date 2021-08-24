import React from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';

export default function LoginBtn() {
  const dispatch = useDispatch();
  function changeState() {
    dispatch({
      type: actionTypes.UPDATE_STATE,
      state: true,
    });
  }
  return (
    <button type="button" onClick={changeState}>login</button>
  );
}

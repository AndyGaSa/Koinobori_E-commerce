import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../../redux/actions/actionTypes';

export default function Notification() {
  const [state] = useState({
    vertical: 'top',
    horizontal: 'right'
  });

  const notification = useSelector((store) => store.notification);
  const dispatch = useDispatch();

  const { vertical, horizontal } = state;

  const handleClose = () => {
    dispatch({
      type: actionTypes.CLEAR_NOTIFICATION
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={!!notification.trim()}
      onClose={handleClose}
      message={notification}
      key={vertical + horizontal}
    />
  );
}

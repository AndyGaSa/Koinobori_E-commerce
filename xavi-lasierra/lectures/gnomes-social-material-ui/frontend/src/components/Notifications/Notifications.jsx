import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../../redux/actions/user.creator';

export default function Notifications() {
  const notifications = useSelector((store) => store.notifications);
  const dispatch = useDispatch();

  const [state] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right'
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    dispatch(closeNotification());
  };

  return (
    notifications.map((notification) => (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration="6000"
        open={open}
        onClose={handleClose}
        message={notification}
        key={vertical + horizontal}
      />
    ))

  );
}

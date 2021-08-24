import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();
  const user = useSelector((store) => store.currentUser);

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={`${user.picture}`} className={classes.large} />
    </div>
  );
}

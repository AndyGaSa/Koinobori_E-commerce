import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/action.creator';
import login from '../../service/login';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {
  const { isAuthenticated, user } = useSelector(({ auth }) => auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  function handleLoginClick() {
    login();
  }
  function handleLogoutClick() {
    dispatch(logout());
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        {isAuthenticated
          ? (
            <>
              <span>
                <h2>Welcome</h2>
                {' '}
                <br />
                {user?.displayName}
              </span>
              <img src={user?.photoURL} alt={user?.name} />
              <Button
                type="button"
                onClick={handleLogoutClick}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Logout
              </Button>

            </>
          )
          : (
            <>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Button
                type="button"
                onClick={handleLoginClick}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            </>
          )}

      </div>
    </Container>
  );
}

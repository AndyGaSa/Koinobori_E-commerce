/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Delete from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import Avatar from '@material-ui/core/Avatar';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import {
  Container,
  Divider, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
} from '@material-ui/core';
import { loadUsers, logout } from '../redux/actions/actionCreators';

import './Userslist.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Userslist() {
  const { user, users } = useSelector((store) => ({
    user: store.auth.user,
    users: store.users,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  function isFriend({ friends }) {
    // eslint-disable-next-line no-underscore-dangle
    return friends.some((friend) => friend === user._id);
  }

  function isAdversary({ adversaries }) {
    // eslint-disable-next-line no-underscore-dangle
    return adversaries.some((adversary) => adversary === user._id);
  }

  const classes = useStyles();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container fixed>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {user?.name}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              aria-label="delete"
              data-testid="logout-button"
              onClick={handleLogout}
            >
              <MeetingRoom />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

      <h2>Friends</h2>
      <ul>
        {user?.friends.map((friend) => (
          <List key={friend.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={friend.name} src={friend.picture} />
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        ))}
      </ul>

      <h2>Adversaries</h2>
      <ul>
        {user?.adversaries.map((adversary) => (
          <List key={adversary.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={adversary.name} src={adversary.picture} />
              </ListItemAvatar>
              <ListItemText
                primary={adversary.name}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        ))}
      </ul>

      <Divider />

      <h2>My neighbours</h2>
      {users?.map((neighbour) => (
        // eslint-disable-next-line no-underscore-dangle
        !(neighbour._id === user._id) && (
        <List key={neighbour.name}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={neighbour.name} src={neighbour.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={neighbour.name}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="SentimentVerySatisfiedIcon">
                <SentimentVerySatisfiedIcon style={isFriend(neighbour) ? { fill: 'green' } : { fill: 'gray' }} />
              </IconButton>
              <IconButton edge="end" aria-label="SentimentVeryDissatisfiedIcon">
                <SentimentVeryDissatisfiedIcon style={isAdversary(neighbour) ? { fill: 'red' } : { fill: 'gray' }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        )
      ))}
    </Container>
  );
}

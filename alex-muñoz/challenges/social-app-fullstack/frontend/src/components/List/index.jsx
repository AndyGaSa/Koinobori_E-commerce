/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import { loadCurrentUser, addOrRemoveFriend, addOrRemoveAdversarie } from '../../redux/actions/creators/currentUser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const user = useSelector((store) => store.currentUser);
  const usersList = useSelector(({ users }) => users);
  const { userId } = useParams();
  const newUserList = usersList?.filter((person) => person._id !== user._id);
  const dispatch = useDispatch();
  function isInTheList(person, userlist) {
    return userlist?.some((someone) => someone.name === person.name);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={16}>
          <div className={classes.demo}>
            <List dense={dense}>
              {newUserList.map((person) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={`${person.picture}.picture}`}
                      className={classes.large}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${person.name}`}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      {isInTheList(person, user.friends)
                        ? <FavoriteBorderIcon style={{ color: red[500] }} onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'REMOVE_FRIEND'))} />
                        : null}
                      {isInTheList(person, user.adversaries)
                        ? <ThumbDownIcon style={{ color: red[500] }} onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'REMOVE_ADVERSARIE'))} />
                        : null}
                      {isInTheList(person, user.friends) || isInTheList(person, user.adversaries)
                        ? null
                        : (
                          <>
                            <FavoriteBorderIcon onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'ADD_FRIEND'))} />
                            <ThumbDownIcon type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'ADD_ADVERSARIE'))} />
                          </>
                        )}
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

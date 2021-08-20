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
  const dispatch = useDispatch();
  const { userId } = useParams();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={16}>
          <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {usersList.map((person) => (
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
                      {user?.friends?.some((friend) => friend._id === person._id)
                        ? <FavoriteBorderIcon style={{ color: red[500] }} onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'REMOVE_FRIEND'))} />
                        : <FavoriteBorderIcon onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'ADD_FRIEND'))}>Add Friend</FavoriteBorderIcon>}
                      {user?.adversaries?.some((adversaries) => adversaries._id === person._id)
                        ? null
                        : <button type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'ADD_ADVERSARIE'))}>Adv</button>}
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

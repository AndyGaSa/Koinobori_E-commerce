/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green, red } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import actionTypes from '../../redux/actions/actionTypes';
import {
  loadGnomes, loadCurrentGnome, addRelated, removeRelated
} from '../../redux/actions/actions.creator';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1)
    },
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: red[500]
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
}));

export default function GnomeDetail() {
  const userGnome = useSelector((store) => store.currentGnome);
  const gnomes = useSelector((store) => store.gnomes);
  const { gnome_id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (!gnomes.length) dispatch(loadGnomes());
    dispatch(loadCurrentGnome(gnome_id));
  }, []);

  return (

    <>
      <Card className={classes.root}>
        <CardContent>
          <Avatar alt="Avatar" src={userGnome?.picture} className={classes.large} />
          <Typography variant="h2" component="h2">
            {userGnome?.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Eyecolor:
            {' '}
            {userGnome?.eyecolor}
            <br />
            Age:
            {' '}
            {userGnome?.age}
            <br />
            Favorite fruit:
            {' '}
            {userGnome?.favoriteFruit}
          </Typography>
          <Typography variant="body2" component="p">
            Greeting:
            {' '}
            {userGnome?.greeting}
            The gretting
          </Typography>
        </CardContent>
      </Card>
      <ul>
        {gnomes?.map((gnome) => (
          <Card
            className={classes.root}
            key={gnome._id}
          >
            <CardHeader
              avatar={(
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {gnome.picture}
                </Avatar>
        )}
              action={(
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
        )}
            />
            {gnome.name}
            {userGnome?.friends?.some((friend) => friend._id === gnome._id)
              ? (
                <IconButton
                  style={{ color: green[500] }}
                  onClick={() => dispatch(removeRelated(gnome_id,
                    userGnome?.friends, gnome._id, actionTypes.REMOVE_FRIEND))}
                >
                  <RemoveCircleIcon />

                </IconButton>
              )
              : (
                <IconButton
                  className="fa fa-plus-circle"
                  style={{ color: green[500] }}
                  onClick={() => dispatch(addRelated(gnome_id, userGnome?.friends,
                    gnome._id, actionTypes.ADD_FRIEND))}
                >
                  <AddCircleIcon />
                </IconButton>
              )}
            {userGnome?.adversaries?.some((friend) => friend._id === gnome._id)
              ? (
                <IconButton
                  color="secondary"
                  onClick={() => dispatch(removeRelated(gnome_id,
                    userGnome?.adversaries, gnome._id, actionTypes.REMOVE_ADVERSARY))}
                >
                  <RemoveCircleIcon />
                </IconButton>
              )
              : <IconButton color="secondary" onClick={() => dispatch(addRelated(gnome_id, userGnome?.adversaries, gnome._id, actionTypes.ADD_ADVERSARY))}><AddCircleIcon /></IconButton>}
          </Card>
        ))}
      </ul>
      <div>
        <h3>Friends:</h3>
        <ul>
          {userGnome?.friends?.map((friend) => <li key={friend._id}>{ friend.name}</li>)}
        </ul>
        <h3>Adversaries:</h3>
        <ul>
          {userGnome?.adversaries?.map(
            (adversary) => <li key={adversary._id}>{ adversary.name}</li>
          )}
        </ul>
      </div>
    </>
  );
}

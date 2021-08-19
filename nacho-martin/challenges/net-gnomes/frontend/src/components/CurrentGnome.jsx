/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentGnome, addRelated, removeRelated } from '../redux/actions/currentGnomeCreator';
import requestTypes from '../utils/requestTypes';

const {
  REMOVE_ADVERSARY,
  REMOVE_FRIEND,
  ADD_ADVERSARY,
  ADD_FRIEND
} = requestTypes;

export default function CurrentGnome() {
  const userGnome = useSelector(({ currentGnome }) => currentGnome);
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  const { gnomeId } = useParams();
  useEffect(() => { (dispatch(loadCurrentGnome(gnomeId))); }, []);

  return (
    <>
      <h2>{userGnome?.name}</h2>

      <ul>
        {gnomesList.map((gnome) => (
          <li key={gnome._id}>
            {gnome.name}
            {userGnome?.friends?.some((friend) => friend._id === gnome._id)
              ? <button type="button" onClick={() => dispatch(removeRelated(gnomeId, userGnome?.friends, gnome._id, REMOVE_FRIEND))}>Remove friend</button>
              : <button type="button" onClick={() => dispatch(addRelated(gnomeId, userGnome?.friends, gnome._id, ADD_FRIEND))}>Add friend</button>}

            {userGnome?.adversaries?.some((friend) => friend._id === gnome._id)
              ? <button type="button" onClick={() => dispatch(removeRelated(gnomeId, userGnome?.adversaries, gnome._id, REMOVE_ADVERSARY))}>Remove adversary</button>
              : <button type="button" onClick={() => dispatch(addRelated(gnomeId, userGnome?.adversaries, gnome._id, ADD_ADVERSARY))}>Add adversary</button>}
          </li>
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

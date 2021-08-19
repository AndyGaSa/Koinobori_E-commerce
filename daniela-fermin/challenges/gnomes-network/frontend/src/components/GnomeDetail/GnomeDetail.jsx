/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  loadGnomes, loadCurrentGnome, addRelated, removeRelated
} from '../../redux/actions/actions.creator';
import actionTypes from '../../redux/actions/actionTypes';

export default function GnomeDetail() {
  const userGnome = useSelector((store) => store.currentGnome);
  const gnomes = useSelector((store) => store.gnomes);
  const { gnome_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gnomes.length) dispatch(loadGnomes());
    dispatch(loadCurrentGnome(gnome_id));
  }, []);

  return (

    <>
      <h2>{userGnome?.name}</h2>
      <span>{userGnome?.age}</span>
      <span>{userGnome?.eyecolor}</span>
      <span>{userGnome?.gender}</span>
      <span>{userGnome?.tags}</span>
      <ul>
        {gnomes?.map((gnome) => (
          <li key={gnome._id}>
            {gnome.name}
            {userGnome?.friends?.some((friend) => friend._id === gnome._id)
              ? <button type="button" onClick={() => dispatch(removeRelated(gnome_id, userGnome?.friends, gnome._id, actionTypes.REMOVE_FRIEND))}>Remove friend</button>
              : <button type="button" onClick={() => dispatch(addRelated(gnome_id, userGnome?.friends, gnome._id, actionTypes.ADD_FRIEND))}>Add friend</button>}
            {userGnome?.adversaries?.some((friend) => friend._id === gnome._id)
              ? <button type="button" onClick={() => dispatch(removeRelated(gnome_id, userGnome?.adversaries, gnome._id, actionTypes.REMOVE_ADVERSARY))}>Remove adversary</button>
              : <button type="button" onClick={() => dispatch(addRelated(gnome_id, userGnome?.adversaries, gnome._id, actionTypes.ADD_ADVERSARY))}>Add adversary</button>}
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

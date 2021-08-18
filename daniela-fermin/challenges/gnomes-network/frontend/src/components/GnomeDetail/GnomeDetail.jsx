/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { loadGnomes, loadCurrentGnome, addFriend } from '../../redux/actions/actions.creator';

export default function GnomeDetail() {
  const userGnome = useSelector((store) => store.currentGnome);
  const gnomes = useSelector((store) => store.gnomes);
  const { gnome_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gnomes.length) dispatch(loadGnomes());
    dispatch(loadCurrentGnome(gnome_id));
  }, [gnome_id]);

  return (
    <main>

      <div>

        <h2>{userGnome.name}</h2>
        <span>{userGnome.age}</span>
        <span>{userGnome.eyecolor}</span>
        <span>{userGnome.gender}</span>
        <span>{userGnome.tags}</span>
        <span>
          Friends:
          {' '}
          {userGnome.friends}
        </span>
        <span>
          Adversaries:
          {' '}
          {userGnome.friends}
        </span>

      </div>
      <div>
        {gnomes.map((otherGnome) => (
          <li key={otherGnome._id}>
            <h3>{otherGnome.name}</h3>
            <button
              type="button"
              onClick={() => { addFriend(gnome_id, otherGnome._id); }}
            >
              Add to Friends

            </button>
            <button type="button">Add to Adversaries</button>
          </li>

        ))}
      </div>
    </main>
  );
}

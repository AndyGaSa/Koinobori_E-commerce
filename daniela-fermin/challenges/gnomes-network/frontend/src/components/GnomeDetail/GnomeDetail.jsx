/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { loadCurrentGnome } from '../../redux/actions/actions.creator';

export default function GnomeDetail() {
  const foundGnome = useSelector((store) => store.currentGnome);
  const { gnome_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentGnome(gnome_id));
  }, [gnome_id]);

  return (
    <main>

      <div>

        <span>{foundGnome.name}</span>
        <span>{foundGnome.age}</span>
        <span>{foundGnome.eyecolor}</span>
        <span>{foundGnome.gender}</span>
        <span>{foundGnome.tags}</span>
        <span>
          Friends:
          {' '}
          {foundGnome.friends}
        </span>
        <span>
          Adversaries:
          {' '}
          {foundGnome.friends}
        </span>

      </div>
    </main>
  );
}

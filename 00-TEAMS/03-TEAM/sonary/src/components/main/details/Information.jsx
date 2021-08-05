/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';
import './details.scss';

export default function Information() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();
  const { track_id } = useParams();
  const [foundTrack, setFoundTrack] = useState();

  useEffect(() => {
    if (!tracks.length) dispatch(loadDashboard());
  }, []);

  useEffect(() => {
    const x = (tracks.find((track) => track.track_id === +track_id));
    setFoundTrack(x);
  }, [track_id, tracks]);

  console.log(foundTrack);

  return (
    <div>
      <h2 className="details__title">{foundTrack?.track_name}</h2>
      <aside className="details__information">
        <figure className="details__figure" />
        <ul className="details__track">
          <li className="track__artist">{foundTrack?.artist_name}</li>
          <li className="track__album">
            Album:
            {' '}
            {foundTrack?.album_name}
          </li>
        </ul>
      </aside>
    </div>
  );
}

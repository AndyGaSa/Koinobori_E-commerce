/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';

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

  return (
    <div>
      <h2>{foundTrack?.track_name}</h2>
      <p>
        Artist:
        {' '}
        {foundTrack?.artist_name}
      </p>
      <p>
        Album:
        {' '}
        {foundTrack?.album_name}
      </p>

    </div>
  );
}

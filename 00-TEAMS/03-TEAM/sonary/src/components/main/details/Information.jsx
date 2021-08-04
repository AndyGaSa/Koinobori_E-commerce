/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';

export default function Information() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();
  const { track_id } = useParams();

  useEffect(() => {
    dispatch(loadDashboard());
  }, []);
  const foundTrack = tracks.find((track) => track.track_id === +track_id);
  console.log(foundTrack);

  return (
    <div>
      Hola
    </div>
  );
}

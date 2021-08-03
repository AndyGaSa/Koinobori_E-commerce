/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadDetails from '../../../redux/actions/details.creator';

export default function Detail() {
  const chart = useSelector((store) => store.chart);
  const { track_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadDetails(track_id)), []);
  return (
    <main>
      <h1>Details Page</h1>
      <p>{chart.lyrics_body}</p>
    </main>
  );
}

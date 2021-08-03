/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadDetails from '../../../redux/actions/details.creator';

export default function Detail() {
  const lyrics = useSelector((store) => store.lyrics);
  const { track_id } = useParams();
  loadDetails(track_id);
  return (
    <main>
      <h1>Details Page</h1>
      <p>{lyrics}</p>
    </main>
  );
}

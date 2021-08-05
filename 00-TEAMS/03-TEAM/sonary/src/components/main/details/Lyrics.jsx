/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadDetails from '../../../redux/actions/details.creator';

export default function Lyrics() {
  const lyrics = useSelector((store) => store.song);
  const { track_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (track_id) {
      dispatch(loadDetails(+track_id));
    }
  }, []);

  return (
    <div className="details__lyrics">
      {lyrics.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  );
}

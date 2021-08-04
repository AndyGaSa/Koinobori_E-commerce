/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypes from '../../../redux/actions/actionTypes';

export default function Dashboard() {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!favorites.length) {
      dispatch({
        type: actionTypes.LOAD_FAVORITES
      });
    }
  }, []);
  return (
    <main>
      <ul>
        {
              favorites.map((track) => (
                <li key={track.track_id}>
                  <Link to={`/details/${track.track_id}`}>
                    <ul>
                      <li>
                        Track name:
                        {' '}
                        {track.track_name}
                      </li>
                      <li>
                        Artist name:
                        {' '}
                        {track.artist_name}
                      </li>
                    </ul>
                  </Link>
                </li>
              ))
          }

      </ul>

    </main>
  );
}

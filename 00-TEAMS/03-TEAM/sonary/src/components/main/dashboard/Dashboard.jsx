/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';

export default function Dashboard() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDashboard());
  }, []);
  return (
    <main>
      <ul>
        {
            tracks.map((track) => (
              <li>
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

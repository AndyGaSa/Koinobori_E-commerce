import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadChart } from '../../../redux/actions/sonary.creators';

export default function Dashboard() {
  const chart = useSelector((store) => store.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChart());
  }, []);
  return (
    <main>
      <ul>
        {
            chart.map((track) => (
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

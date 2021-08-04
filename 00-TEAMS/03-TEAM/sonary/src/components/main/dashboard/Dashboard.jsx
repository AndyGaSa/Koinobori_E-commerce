/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadDashboard } from '../../../redux/actions/dashboard.creator';
import './Dashboard.scss';

export default function Dashboard() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!tracks.length) dispatch(loadDashboard());
  }, []);

  let ranking = 0;
  return (
    <main>
      <section className="dashboard">
        <h1>Top Chart</h1>
        <input type="search" placeholder="Search for a song!" className="dashboard__search" />
      </section>
      <ul className="dashboard__list">
        {
            tracks.map((track) => {
              ranking += 1;
              return (
                <li>
                  <ul className="list__track">
                    <li>
                      <Link className="track" to={`/details/${track.track_id}`}>
                        <img className="track__thumbnail" src="" alt="" />
                      </Link>
                    </li>
                    <li>
                      <ul className="track__information">
                        <li>
                          <ul className="information__top">
                            <li className="top__position">
                              #
                              {ranking}
                            </li>
                            <li className="top__position">
                              <button type="button">add</button>
                            </li>
                          </ul>
                        </li>
                        <Link className="track" to={`/details/${track.track_id}`}>
                          <li>
                            <ul className="information__bottom">
                              <li className="bottom__track">{track.track_name}</li>
                              <li className="bottom__artist">{track.artist_name}</li>
                            </ul>
                          </li>
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </li>
              );
            })
        }
      </ul>

    </main>
  );
}

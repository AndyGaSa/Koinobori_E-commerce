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
    <main className="dashbaoard">
      <section className="dashboard__top">
        <h1 className="dashboard__title">Top Chart</h1>
        <input type="search" placeholder="  Search for a song!" className="dashboard__search" />
      </section>
      <ul className="dashboard__bottom">
        {
            tracks.map((track) => {
              ranking += 1;
              return (
                <li className="list__track">
                  <Link className="track" to={`/details/${track.track_id}`}>
                    <ul className="list__aux">
                      <li className="track__thumbnail">
                        <img src="" alt="" />
                      </li>
                      <li>
                        <ul className="track__information">
                          <li className="information__top">
                            #
                            {ranking}
                          </li>
                          <li>
                            <ul className="information__bottom">
                              <li className="bottom__track">{track.track_name}</li>
                              <li className="bottom__artist">{track.artist_name}</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Link>
                </li>
              );
            })
        }
      </ul>

    </main>
  );
}

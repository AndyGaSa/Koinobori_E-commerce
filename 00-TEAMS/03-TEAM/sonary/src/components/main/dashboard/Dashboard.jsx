/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadDashboard } from '../../../redux/actions/dashboard.creator';
import actionTypes from '../../../redux/actions/actionTypes';
import './Dashboard.scss';

export default function Dashboard() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tracks.length) dispatch(loadDashboard());
  }, []);

  let topSong = 0;
  return (
    <main>
      <section className="dashboard">
        <h1>Top Chart</h1>
        <input type="search" placeholder="Serch" className="dashboard__search" />
      </section>
      <ul className="tracks__list">
        {

            tracks.map((track) => {
              topSong += 1;
              return (
                <Link className="track" to={`/details/${track.track_id}`}>
                  <li>
                    <img src="https://www.laregion.es/asset/zoomcrop,1366,800,center,center//media/laregion/images/2021/07/30/2021073013335238213.jpg" alt="" />
                    <span>
                      <span className="track__info__top">
                        <span>
                          #
                          {topSong}
                        </span>
                        <button
                          type="button"
                          onClick={() => dispatch({
                            type: actionTypes.TOGGLE_FAVORITES,
                            track
                          })}
                        >
                          Add/Remove

                        </button>
                      </span>
                      <ul className="track__info">
                        <li>
                          {track.track_name}
                        </li>
                        <li>
                          <span className="track__info__artist">{track.artist_name}</span>
                        </li>
                      </ul>
                    </span>

                  </li>
                </Link>
              );
            })

        }
      </ul>

    </main>
  );
}

/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypes from '../../../redux/actions/actionTypes';
import { loadDashboard } from '../../../redux/actions/dashboard.creator';
import './Dashboard.scss';

export default function Dashboard() {
  const { tracks, favoriteTracks } = useSelector((store) => ({
    tracks: store.sonary,
    favoriteTracks: store.favorites
  }));

  const dispatch = useDispatch();
  const [filteredSongs, setFilterSong] = useState();
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  function toggleFav(track) {
    dispatch({
      type: actionTypes.TOGGLE_FAVORITES,
      track
    });
  }

  function getFavClass(track) {
    const isFav = favoriteTracks.some((song) => song === track);
    return isFav ? 'list__button--fav' : '';
  }

  function filterSongs(searchTerm) {
    if (!searchTerm) setFilterSong(tracks);
    else {
      const newSongs = tracks.filter(({ album_name, artist_name, track_name }) => {
        const searchValues = [album_name, artist_name, track_name];
        // eslint-disable-next-line no-debugger
        debugger;
        return searchValues.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterSong(newSongs);
    }
  }

  useEffect(() => {
    if (!tracks.length) dispatch(loadDashboard());
  }, []);

  useEffect(() => {
    setFilterSong(tracks || []);
  }, [tracks]);

  let ranking = 0;
  return (
    <main className="dashboard">
      <section className="dashboard__top">
        <h1 className="dashboard__title">Top Chart</h1>
        <input type="search" placeholder="  Search for a song!" onChange={(event) => filterSongs(event.target.value)} className="dashboard__search" />
      </section>
      <ul className="dashboard__bottom">
        {

            filteredSongs && filteredSongs.map((track) => {
              ranking += 1;
              return (
                <li className="list__track">
                  <button
                    type="button"
                    className={`list__button ${getFavClass(track)}`}
                    onClick={() => toggleFav(track)}
                  >
                    +
                  </button>
                  <Link className="track" to={`/details/${track.track_id}`}>
                    <ul className="list__aux">
                      <li className="track__thumbnail" style={{ backgroundColor: `#${randomColor()}` }}>
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
                      <li className="information__auxiliar" />
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

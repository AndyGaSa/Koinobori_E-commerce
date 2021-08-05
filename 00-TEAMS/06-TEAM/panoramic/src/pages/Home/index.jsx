import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import getSpotifyToken, { loadAxiosSuggestedArtists } from '../../redux/actions/actionCreatorsHome';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';

import './Home.scss';

import BannerLanding from '../../components/BannerLanding';

export default function Home() {
  const artists = useSelector((store) => store.suggestedArtists);
  const dispatch = useDispatch();

  useEffect(() => {
    getSpotifyToken();
    dispatch(loadAxiosSuggestedArtists());
  }, []);
  return (
    <>
      <BannerLanding />
      <div className="suggested-artists-container">
        <h1 className="suggested-artists-container__title">Suggestion Artist</h1>
        <ul className="suggested-artists-container__artists-cards">
          {
          artists.map((artist) => (
            <li className="artist-details">
              <img className="artist-details__artist-img" src={`${artist.images[0].url}`} alt="artist-img" />
              <h3 className="artist-details__artist-name">
                {artist.name}
              </h3>
              <p>
                <span>{`Artist genre: ${artist.genres[0]}`}</span>
                <span>{`Followers: ${artist.followers.total}`}</span>
              </p>
              <button
                className="artist-details__add-fav-button"
                type="button"
                onClick={() => dispatch(addFavArtist(artist))}
              >
                + Add to favourites
              </button>
            </li>
          ))
      }
        </ul>
      </div>
    </>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import getSpotifyToken, { loadAxiosSuggestedArtists } from '../../redux/actions/actionCreatorsSuggestedArtist';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import loadArtistDetails from '../../redux/actions/actionCreatorsArtistDetails';

import './SuggestedArtist.scss';

export default function SuggestedArtist() {
  const artists = useSelector((store) => store.suggestedArtists);
  const dispatch = useDispatch();
  const generateRandomString = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i += 1) {
      result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
  };
  function getImageFromArtist({ images }) {
    return images && images[0] ? images[0].url : '';
  }

  useEffect(() => {
    getSpotifyToken();
    dispatch(loadAxiosSuggestedArtists(generateRandomString(1)));
  }, []);
  return (
    <>
      <div className="suggested-artists-container">
        <h1 className="suggested-artists-container__title">Suggested Artist</h1>
        <ul className="suggested-artists-container__artists-cards">
          {
          artists.map((artist) => (
            <li
              data-testid="list-item"
              key="list-item"
              className="artist-details"
            >
              <Link className="artist-details__link" to={`/details/${artist.name}`}>
                <button
                  type="button"
                  data-testid="artist-details-button"
                  onClick={() => dispatch(loadArtistDetails(artist.name))}
                >
                  <img className="artist-details__artist-img" src={getImageFromArtist(artist)} alt="artist-img" />
                </button>
              </Link>
              <h3 className="artist-details__artist-name">
                {artist.name}
              </h3>
              <p className="artist-details-span">
                <span>{`Artist genre: ${artist.genres[0]}`}</span>
                <span>{`Followers: ${artist.followers.total}`}</span>
              </p>
              <button
                className="artist-details__add-fav-button"
                data-testid="add-button"
                type="button"
                onClick={() => dispatch(addFavArtist(artist))}
              >
                +Add to favourites
              </button>
            </li>
          ))
      }
        </ul>
        <button
          className="refresh-artist-button"
          type="button"
          onClick={() => dispatch(loadAxiosSuggestedArtists(generateRandomString(1)))}

        >
          Refresh
        </button>
      </div>
    </>
  );
}

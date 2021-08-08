import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getSpotifyToken from '../../redux/actions/actionCreatorsSuggestedArtist';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';

import './ArtistDetails.scss';

export default function ArtistDetails() {
  const searchedArtist = useSelector((store) => store.artistDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    getSpotifyToken();
  }, []);

  function getImageFromArtist({ images }) {
    return images && images[0] ? images[0].url : '';
  }
  return (
    <div className="main-artist-details">
      <h1>{' Details'}</h1>
      <ul className="main__artists-list">
        {searchedArtist.map((artist) => (
          <li
            className="main__artist-item artist-item"
            data-testid={`list-item-${artist.name}`}
            key={`list-item-${artist.name}`}
          >

            <img src={getImageFromArtist(artist)} className="artist-item__photo" alt="photoartist" />
            <p className="artist-item__name">{artist.name}</p>
            <button
              className="artist-item__button-add"
              data-testid="add-button"
              type="button"
              onClick={() => dispatch(addFavArtist(artist))}
            >
              + Add
            </button>
          </li>

        ))}
      </ul>

    </div>
  );
}

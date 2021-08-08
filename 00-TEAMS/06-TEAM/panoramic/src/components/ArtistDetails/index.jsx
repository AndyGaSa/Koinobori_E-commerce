import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getSpotifyToken from '../../redux/actions/actionCreatorsSuggestedArtist';
import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';

import './ArtistDetails.scss';

export default function ArtistDetails() {
  const searchedArtist = useSelector((store) => store.artistDetails);
  const dispatch = useDispatch();
  console.log(searchedArtist);
  useEffect(() => {
    getSpotifyToken();
  }, []);

  function getImageFromArtist({ images }) {
    return images && images[0] ? images[0].url : '';
  }
  return (
    <div className="artist-details-container">
      <h1 className="artist-details-container__title">Artist Details</h1>
      <ul>
        {searchedArtist.map((artist) => (
          <li
            className="artist-details-container__artist-card"
            data-testid={`list-item-${artist.name}`}
            key={`list-item-${artist.name}`}
          >
            <div className="artist-card__artist">
              <img src={getImageFromArtist(artist)} className="artist-item__photo" alt="photoartist" />
              <p className="artist-item__name">{artist.name}</p>
            </div>

            <ul className="artist-card__genres">
              Genres:
              {artist.genres[0]
                ? artist.genres.map((genre) => (
                  <li>
                    {genre}
                  </li>
                ))
                : <p>None</p>}

            </ul>

            <ul className="artist-card__followers">
              Followers:
              <li>
                {artist.followers.total}
              </li>
            </ul>
            <ul className="artist-card__popularity">
              Popularity:
              <li>
                {artist.popularity}
              </li>
            </ul>
            <div className="artist-card__buttons">
              <a
                className="artist-card__spotify-link"
                href={`${artist.external_urls.spotify}`}
              >
                View on Spotify
              </a>
              <button
                className="artist-item__button-add"
                data-testid="add-button"
                type="button"
                onClick={() => dispatch(addFavArtist(artist))}
              >
                + Add to favourites
              </button>
            </div>
          </li>

        ))}
      </ul>

    </div>
  );
}

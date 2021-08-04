import actionTypes from './actionTypes';

export function loadFavArtists(favArtists) {
  return ({
    type: actionTypes.LOAD_FAVOURITE_ARTISTS,
    favArtists
  });
}

export function deleteFavArtists(artist) {
  return (
    {
      type: actionTypes.DELETE_FAVOURITE_ARTISTS,
      artist
    }
  );
}

// Tiene que funcionar en funcion del LOAD nuevo
export function addFavArtist(artist) {
  return (
    ({
      type: actionTypes.ADD_FAVOURITE_ARTISTS,
      artist
    })
  );
}

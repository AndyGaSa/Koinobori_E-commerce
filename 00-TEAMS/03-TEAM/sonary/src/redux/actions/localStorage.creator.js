let favouriteTracks;
export function saveFavouritesToLocalStorage(favorites) {
  localStorage.setItem('favouriteTracks', JSON.stringify(favorites));
}
export function initializeLocalStorage() {
  favouriteTracks = JSON.parse(localStorage.getItem('favouriteTracks'));
  if (!favouriteTracks) {
    favouriteTracks = [];
  }
  return favouriteTracks;
}

export function favouritesLocalStorageCheck() {
  if (!localStorage.getItem('favourites')) {
    const favouritesEmpty = { favouriteLeagues: [], favouriteTeams: [] };
    localStorage.setItem('favourites', JSON.stringify(favouritesEmpty));
  }
}

export function getFavouritesLocalStorage() {
  return JSON.parse(localStorage.getItem('favourites'));
}

export function saveFavourites(favourites) {
  localStorage.setItem('favourites', JSON.stringify(favourites));
}

export function leagueIsInFavourites(leagueId) {
  const favourites = getFavouritesLocalStorage();
  return favourites.favouriteLeagues.some(({ id }) => id === leagueId);
}

export function favouritesCheck() {
  if (!localStorage.getItem('favourites')) {
    const favouritesEmpty = { favouriteLeagues: [], favouriteTeams: [] };
    localStorage.setItem('favourites', JSON.stringify(favouritesEmpty));
  }
}

export function saveFavourites(favourites) {
  localStorage.setItem('favourites', JSON.stringify(favourites));
}

(function detailsFromHero() {
  const url = window.location.search;
  const id = getIdFromUrl(url).heroId;
  const printHero = new HeroDetails(id, HEROES_LIST);
  printHero.setViews();
}());

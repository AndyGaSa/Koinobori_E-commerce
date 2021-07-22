(function detailsFromHero() {
  if (!localStorage.getItem('heroes')) { localStorage.setItem('heroes', JSON.stringify(HEROES_LIST)); }
  const url = window.location.search;
  const id = getIdFromUrl(url).heroId;
  const printHero = new HeroDetails(id, storage);
  printHero.setViews();
  printHero.setPowerstats();
}());

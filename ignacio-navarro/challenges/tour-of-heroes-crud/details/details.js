(function detailsFromHero() {
  if (!localStorage.getItem('heroes')) { makeRequest(); }
  const url = window.location.search;
  const id = getIdFromUrl(url).heroId;
  const printHero = new HeroDetails(id, storage);
  printHero.setViews();
  printHero.setPowerstats();
  printHero.setNormalBlock('appearance');
  printHero.setNormalBlock('biography');
  printHero.setNormalBlock('work');
  printHero.setNormalBlock('connections');
}());

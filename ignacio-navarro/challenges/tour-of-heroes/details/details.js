(function detailsFromHero() {
  const url = window.location.search;
  const id = 2;
  const printHero = new HeroDetails(id, heroesList);
  printHero.setViews();
}());

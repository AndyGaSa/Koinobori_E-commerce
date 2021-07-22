(function printHeroesCard() {
  if (!localStorage.getItem('heroes')) { makeRequest(); }
  const print = new HeroesCard(storage);
  print.setViews();
}());

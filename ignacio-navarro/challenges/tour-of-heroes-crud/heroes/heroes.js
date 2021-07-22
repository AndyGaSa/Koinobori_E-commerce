(function printHeroesCard() {
  if (!localStorage.getItem('heroes')) {
    localStorage.setItem('heroes', JSON.stringify(HEROES_LIST));
  }
  const print = new HeroesCard(storage);
  print.setViews();
}());

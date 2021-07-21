(function heroesPageModel() {
  const heroesPage = new HeroesPage(heroes);
  heroesPage.setView();
}());
localStorage.setItem('heroes', heroes);

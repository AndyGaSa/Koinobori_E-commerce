(function heroesPageModel() {
    const heroesPage = new HeroesPage(heroesStorage);
    heroesPage.setView();
    heroesPage.setDeleteButtonId();
  }());
